"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docgenScaffolder = docgenScaffolder;
var _groupBy = _interopRequireDefault(require("lodash/groupBy"));
var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));
var _orderBy = _interopRequireDefault(require("lodash/orderBy"));
var _startCase = _interopRequireDefault(require("lodash/startCase"));
var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _logger = require("../utils/logger");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function pascalCase(str) {
  return (0, _startCase.default)(str).split(' ').join('');
}
function getTemplates(outputDir) {
  return ['design', 'metadata', 'intro', 'usage', 'example', 'a11y', 'implementation'].filter(item => {
    return _nodeFs.default.existsSync(_nodePath.default.join(outputDir, `_${item}.mdx`));
  }).map(item => {
    return {
      template: item,
      component: pascalCase(item),
      toc: `${item}Toc`
    };
  });
}
function docgenScaffolder({
  docsDir = 'docs',
  forceDocs,
  sourceFiles,
  docs
}) {
  const filesToWriteToDisk = [];
  const partials = (0, _orderBy.default)(Array.from(docs.values()), ['mdxImport.name']);
  const groupedDocs = (0, _groupBy.default)(partials, 'slug');
  Object.entries(groupedDocs).forEach(([slug, dataForGroup]) => {
    const {
      displayName
    } = dataForGroup[0];
    const [subdir, component, maybeComponentFile] = slug.split('/');
    const outputDir = _nodePath.default.join(docsDir, subdir, maybeComponentFile ?? component);
    const kebabCaseName = (0, _kebabCase.default)(displayName);
    const docDest = _nodePath.default.join(outputDir, `${kebabCaseName}.mdx`);
    const templates = getTemplates(outputDir);
    const hasDesign = templates.map(item => item.template).includes('design');
    const addToFilesToWrite = () => {
      const data = {
        title: (0, _startCase.default)(displayName),
        kebabCaseName,
        apiPartials: (0, _uniqBy.default)(dataForGroup, 'apiPartial.name'),
        templates,
        hasDesign
      };
      filesToWriteToDisk.push({
        dest: docDest,
        data,
        template: 'doc/component'
      });
      filesToWriteToDisk.push({
        dest: _nodePath.default.join(outputDir, `_implementation.mdx`),
        data,
        template: 'doc/implementation'
      });
      filesToWriteToDisk.push({
        dest: _nodePath.default.join(outputDir, `_metadata.mdx`),
        data,
        template: 'doc/metadata'
      });
    };
    try {
      if (_nodeFs.default.existsSync(docDest)) {
        if (Array.isArray(forceDocs) && forceDocs.includes(displayName)) {
          _logger.logger.forceIsTrue();
          addToFilesToWrite();
        } else if (forceDocs === true && sourceFiles.map(item => _nodePath.default.basename(item)).includes(displayName)) {
          _logger.logger.forceIsTrue();
          if (_nodeFs.default.existsSync(_nodePath.default.join(outputDir, '_features.mdx'))) {
            _nodeFs.default.rmSync(_nodePath.default.join(outputDir, '_features.mdx'));
          }
          addToFilesToWrite();
        }
      } else if (outputDir === displayName) {
        _logger.logger.preppingDoc(displayName);
        addToFilesToWrite();
      }
    } catch (err) {
      console.log(err);
      if (outputDir === displayName) {
        _logger.logger.preppingDoc(displayName);
        addToFilesToWrite();
      }
    }
  });
  return filesToWriteToDisk;
}