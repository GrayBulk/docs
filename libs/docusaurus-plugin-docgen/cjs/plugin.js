"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plugin;
var _utils2 = require("@docusaurus/utils");
var _nodePath = _interopRequireDefault(require("node:path"));
var _docgenRunner = require("./scripts/docgenRunner");
var _docgenWriter = require("./scripts/docgenWriter");
var _logger = require("./utils/logger");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PLUGIN_ID = '@coinbase/docusaurus-plugin-docgen';
function plugin({
  generatedFilesDir
}, {
  enabled = true,
  ...options
}) {
  /**
   * The directory where we want to output docgen data and components.
   * If running on website, this will be in .docusaurus/@coinbase/docusaurus-plugin-docgen/default
   */
  const pluginDir = _nodePath.default.join(generatedFilesDir, PLUGIN_ID, options.id ?? _utils2.DEFAULT_PLUGIN_ID);
  return {
    name: PLUGIN_ID,
    getPathsToWatch() {
      if (!enabled) return [];
      // Watch the src/ directory of each entry point package so that changes
      // to component source files trigger a reload
      return options.entryPoints.map(tsconfigPath => `${_nodePath.default.dirname(tsconfigPath)}/src/**/*.{ts,tsx}`);
    },
    async loadContent() {
      if (enabled) {
        _logger.logger.init();
        return (0, _docgenRunner.docgenRunner)({
          ...options,
          pluginDir
        });
      }
      _logger.logger.enabledOff();
      return undefined;
    },
    configureWebpack(_webpackConfig, _isServer, _utils, content) {
      let metadataAliases = {};
      let apiAliases = {};
      let dataAliases = {};
      let tocPropsAliases = {};
      if (content) {
        apiAliases = Object.fromEntries(content.parsedDocs.map(item => [_nodePath.default.join(':docgen', _nodePath.default.relative(pluginDir, item.cacheDirectory), 'api.mdx'), _nodePath.default.join(item.cacheDirectory, 'api.mdx')]));
        metadataAliases = Object.fromEntries(content.projects.map(item => [_nodePath.default.join(':docgen', _nodePath.default.relative(pluginDir, item.cacheDirectory), 'metadata'), _nodePath.default.join(item.cacheDirectory, 'metadata.js')]));
        dataAliases = Object.fromEntries(content.parsedDocs.map(item => [_nodePath.default.join(':docgen', _nodePath.default.relative(pluginDir, item.cacheDirectory), 'data'), _nodePath.default.join(item.cacheDirectory, 'data.js')]));
        tocPropsAliases = Object.fromEntries(content.parsedDocs.map(item => [_nodePath.default.join(':docgen', _nodePath.default.relative(pluginDir, item.cacheDirectory), 'toc-props'), _nodePath.default.join(item.cacheDirectory, 'toc-props.js')]));
      }

      // Styles API aliases - only create for docs that have styles data
      const stylesDataAliases = content ? Object.fromEntries(content.parsedDocs.filter(item => item.styles && item.styles.selectors.length > 0).map(item => [_nodePath.default.join(':docgen', _nodePath.default.relative(pluginDir, item.cacheDirectory), 'styles-data'), _nodePath.default.join(item.cacheDirectory, 'styles-data.js')])) : {};
      const tocStylesAliases = content ? Object.fromEntries(content.parsedDocs.filter(item => item.styles && item.styles.selectors.length > 0).map(item => [_nodePath.default.join(':docgen', _nodePath.default.relative(pluginDir, item.cacheDirectory), 'toc-styles'), _nodePath.default.join(item.cacheDirectory, 'toc-styles.js')])) : {};
      const aliases = {
        ...apiAliases,
        ...metadataAliases,
        ...dataAliases,
        ...tocPropsAliases,
        ...stylesDataAliases,
        ...tocStylesAliases,
        ...(content ? {
          [`:docgen/_types/sharedTypeAliases`]: _nodePath.default.join(pluginDir, '_types/sharedTypeAliases'),
          [`:docgen/_types/sharedParentTypes`]: _nodePath.default.join(pluginDir, '_types/sharedParentTypes')
        } : {})
      };
      return {
        resolve: {
          alias: aliases
        }
      };
    },
    async contentLoaded({
      content,
      actions
    }) {
      if (content) {
        const {
          projects,
          filesToWrite
        } = content;
        await (0, _docgenWriter.docgenWriter)(filesToWrite);
        actions.setGlobalData({
          enabled: true,
          projects
        });
        _logger.logger.pluginComplete();
      } else {
        actions.setGlobalData({
          enabled: false,
          projects: []
        });
      }
    }
  };
}