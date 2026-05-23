"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docgenRunner = docgenRunner;
exports.selectPrimaryDocs = selectPrimaryDocs;
var _fastGlob = _interopRequireDefault(require("fast-glob"));
var _capitalize = _interopRequireDefault(require("lodash/capitalize"));
var _groupBy = _interopRequireDefault(require("lodash/groupBy"));
var _keyBy = _interopRequireDefault(require("lodash/keyBy"));
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _docgenCache = require("../utils/docgenCache");
var _getPackageJsonFromTsconfig = require("../utils/getPackageJsonFromTsconfig");
var _logger = require("../utils/logger");
var _docgenParser = require("./docgenParser");
var _docgenScaffolder = require("./docgenScaffolder");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function selectPrimaryDocs(docs) {
  /**
   * react-docgen-typescript can return multiple "docs" for a single file when that file exports
   * multiple components/types. Our output paths (`destDir`) are derived only from `doc.filePath`,
   * so multiple docs for the same file would collide on `data.js`, `api.mdx`, etc.
   *
   * Heuristic: for each file, prefer the doc whose displayName matches the filename
   * (e.g. `RollingNumber.tsx` -> `RollingNumber`). Otherwise, fall back to the first parsed doc.
   */
  return Object.values((0, _groupBy.default)(docs, 'filePath')).map(docsForFile => {
    const filePath = docsForFile[0]?.filePath ?? '';
    const fileBaseName = _nodePath.default.basename(filePath, _nodePath.default.extname(filePath));
    return docsForFile.find(d => d.displayName === fileBaseName) ?? docsForFile[0];
  });
}
function getTempDirForDoc({
  projectDir,
  doc
}) {
  const relativeFilePath = doc.filePath.replace(`${_nodePath.default.dirname(projectDir)}/`, '').replace('src/', '');
  return relativeFilePath.replace(_nodePath.default.extname(relativeFilePath), '');
}
function getRepoUrl(repository) {
  const repoUrl = typeof repository === 'string' ? repository : repository?.url;
  if (repoUrl) {
    /** We need to change to https url */
    if (repoUrl.includes('.git')) {
      /** git@github.com:coinbase/cds.git */
      const [domain, project] = repoUrl.replace('git@', '').split(':');
      const [user, repo] = project.replace('.git', '').split('/');
      return `https://${domain}/${user}/${repo}`;
    }
    return repoUrl;
  }
  return undefined;
}

/**
 * Takes plugin config and runs docgenParser.
 * Based on parsed docs, will pass onto docgenWriter any templates we want to write to disk.
 */
async function docgenRunner(params) {
  const {
    entryPoints,
    formatPackageName,
    sourceFiles,
    docsDir,
    forceDocs,
    pluginDir,
    onProcessDoc
  } = params;
  let filesToWriteToDisk = [];
  const parsedProjects = [];
  const docs = new Set();

  /**
   * Use the entryPoints to understand which projects actually have the files defined in config
   * before running docgenParser.
   */
  const projects = await Promise.all(entryPoints.map(async tsconfigPath => {
    const projectDir = _nodePath.default.dirname(tsconfigPath);
    const files = await (0, _fastGlob.default)('**/*.(ts|tsx|jsx)', {
      onlyFiles: true,
      cwd: projectDir,
      absolute: false,
      ignore: ['**/__mocks__', '**/__tests__', '**/__stories__', '**/*-test.*', '**/*.fixture.*', '**/*.mock.*', '**/*.test.*', '**/*.spec.*', '**/*.d.ts', '**/*.stories.*', '**/index.ts', 'lib', 'node_modules']
    });
    const filteredFiles = files.filter(file => sourceFiles.some(sourceFile => file.includes(sourceFile)));
    return {
      tsconfigPath,
      projectDir,
      files: filteredFiles
    };
  }));
  const diskCache = (0, _docgenCache.loadDocgenCache)(pluginDir);
  const newCacheEntries = {};
  projects.forEach(({
    tsconfigPath,
    projectDir,
    files
  }) => {
    const {
      name: packageNameWithScope = '',
      version,
      repository,
      peerDependencies
    } = (0, _getPackageJsonFromTsconfig.getPackageJsonFromTsconfig)(tsconfigPath);
    const [maybeScope, packageNameWithoutScope = maybeScope] = packageNameWithScope.split('/');
    const repoUrl = getRepoUrl(repository);

    /**
     * If a component is associated with multiple packages, such as web and mobile, we want
     * to aggregate that information to a single doc and use mechanism like Tabs to toggle between the two.
     * This is why we need a projectName, which can just typically just be the packageNameWithoutScope.
     *
     * If there is no formatPackageName provided to config this will turn:
     *  `@coinbase/cds-web` -> `cds-web`
     */
    const projectName = formatPackageName?.(packageNameWithoutScope) ?? packageNameWithoutScope;

    // Include anything you want to be accessible client side via usePluginData here.
    const projectData = {
      label: projectName,
      name: packageNameWithScope,
      version,
      cacheDirectory: _nodePath.default.join(pluginDir, _nodePath.default.basename(_nodePath.default.dirname(tsconfigPath)))
    };
    parsedProjects.push(projectData);
    filesToWriteToDisk.push({
      dest: _nodePath.default.join(projectData.cacheDirectory, `metadata.js`),
      data: {
        version,
        peerDependencies
      },
      template: 'shared/objectMap'
    });

    /**
     * Content-hash disk cache: if the source files and tsconfig for this entry point
     * haven't changed since the last run, reuse the cached parse results instead of
     * re-creating a TypeScript program and running react-docgen-typescript.
     */
    const absoluteFiles = files.map(f => _nodePath.default.join(projectDir, f));
    const entryPointHash = (0, _docgenCache.computeEntryPointHash)(absoluteFiles, tsconfigPath);
    const cachedEntry = diskCache?.entryPoints[tsconfigPath];
    let parsedDocs;
    if (cachedEntry && cachedEntry.hash === entryPointHash) {
      // Cache hit — skip parsing, replay shared cache contributions
      _logger.logger.cacheHit(_nodePath.default.basename(projectDir));
      parsedDocs = cachedEntry.docs;
      for (const prop of cachedEntry.parentTypeProps) {
        _docgenParser.sharedParentTypesCache.add(prop);
      }
      for (const [key, value] of cachedEntry.typeAliases) {
        _docgenParser.sharedTypeAliasesCache.set(key, value);
      }
      newCacheEntries[tsconfigPath] = cachedEntry;
    } else {
      // Cache miss — parse and capture shared cache contributions
      _logger.logger.cacheMiss(_nodePath.default.basename(projectDir));
      const parentTypesBefore = new Set(_docgenParser.sharedParentTypesCache);
      const typeAliasesBefore = new Map(_docgenParser.sharedTypeAliasesCache);
      parsedDocs = (0, _docgenParser.docgenParser)({
        tsconfigPath,
        projectDir,
        files,
        onProcessDoc
      });
      const newParentTypeProps = [..._docgenParser.sharedParentTypesCache].filter(p => !parentTypesBefore.has(p));
      const newTypeAliases = [..._docgenParser.sharedTypeAliasesCache.entries()].filter(([k]) => !typeAliasesBefore.has(k));
      newCacheEntries[tsconfigPath] = {
        hash: entryPointHash,
        docs: parsedDocs,
        parentTypeProps: newParentTypeProps,
        typeAliases: newTypeAliases
      };
    }
    selectPrimaryDocs(parsedDocs).forEach(({
      example,
      ...doc
    }) => {
      /**
       * Turn absolute path of parsed doc into path relative to project.
       * This should match what was provided in config.
       * i.e. `Users/katherinemartinez/cds/packages/web/src/accordions/Accordion.tsx` into `web/accordions/Accordion.tsx`.
       */
      const destDir = getTempDirForDoc({
        projectDir,
        doc
      });
      const [, ...destDirWithoutProjectArray] = destDir.split('/');
      const slug = destDirWithoutProjectArray.join('/');
      const data = {
        ...doc,
        cacheDirectory: _nodePath.default.join(pluginDir, destDir),
        repoUrl,
        importBlock: {
          name: doc.displayName,
          path: _nodePath.default.join(packageNameWithScope, slug)
        },
        apiPartial: {
          name: `${(0, _capitalize.default)(`${projectName}`)}PropsTable`,
          path: _nodePath.default.join(':docgen', destDir, 'api.mdx')
        },
        changelogPartial: {
          name: `${(0, _capitalize.default)(`${projectName}`)}Changelog`,
          path: _nodePath.default.join(':docgen', destDir, 'changelog.mdx')
        },
        tab: {
          label: (0, _capitalize.default)(projectName),
          value: projectName
        },
        slug
      };
      docs.add(data);

      /** TODO: Pull codegen 2.0 into separate package and pull in here.
       * Then we can just pass in the directory and it will run codegen on all templates in directory
       * rather than having to define each separately.
       */

      /** Data from react-docgen-typescript */
      filesToWriteToDisk.push({
        data,
        dest: _nodePath.default.join(pluginDir, destDir, 'data.js'),
        template: 'shared/objectMap'
      });
      filesToWriteToDisk.push({
        data: data.props.map(item => ({
          id: item.name,
          level: 3,
          value: item.name
        })),
        dest: _nodePath.default.join(pluginDir, destDir, 'toc-props.js'),
        template: 'shared/objectMap'
      });

      /** Styles API data - extracted from *ClassNames exports */
      if (data.styles && data.styles.selectors.length > 0) {
        filesToWriteToDisk.push({
          data: data.styles,
          dest: _nodePath.default.join(pluginDir, destDir, 'styles-data.js'),
          template: 'shared/objectMap'
        });
        filesToWriteToDisk.push({
          data: [{
            id: 'selectors',
            level: 3,
            value: 'Selectors'
          }],
          dest: _nodePath.default.join(pluginDir, destDir, 'toc-styles.js'),
          template: 'shared/objectMap'
        });
      }

      /** MDX file with PropsTable react component. Passes in props from js file in .docusaurus cache */
      filesToWriteToDisk.push({
        data,
        dest: _nodePath.default.join(pluginDir, destDir, 'api.mdx'),
        template: 'doc-item/api'
      });
      if (example) {
        filesToWriteToDisk.push({
          data: {
            example
          },
          dest: _nodePath.default.join(pluginDir, destDir, 'example.mdx'),
          template: 'doc-item/example'
        });
      }
    });
  });
  (0, _docgenCache.saveDocgenCache)(pluginDir, newCacheEntries);
  _logger.logger.preppingData();
  if (docsDir) {
    const scaffolds = (0, _docgenScaffolder.docgenScaffolder)({
      docsDir,
      forceDocs,
      sourceFiles,
      docs
    });
    filesToWriteToDisk = [...filesToWriteToDisk, ...scaffolds];
  }

  /** Output all shared parentTypes to object. We group by parent name, i.e SpacingProps
   * and transform to an object, where each prop for that parent type is defined.
   */
  const groupedObjectTypes = (0, _mapValues.default)((0, _groupBy.default)(Array.from(_docgenParser.sharedParentTypesCache.values()), 'parent'), val => (0, _keyBy.default)(val, 'name'));
  _logger.logger.writingData();
  return {
    filesToWrite: [...(0, _uniqBy.default)(filesToWriteToDisk, 'dest'), {
      dest: `${pluginDir}/_types/sharedParentTypes.js`,
      data: {
        sharedParentTypes: groupedObjectTypes
      },
      template: 'shared/objectMap'
    }, {
      dest: `${pluginDir}/_types/sharedTypeAliases.js`,
      data: {
        sharedTypeAliases: Object.fromEntries(_docgenParser.sharedTypeAliasesCache)
      },
      template: 'shared/objectMap'
    }],
    projects: parsedProjects,
    parsedDocs: Array.from(docs.values())
  };
}