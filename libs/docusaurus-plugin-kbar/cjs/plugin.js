"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plugin;
var _pluginContentDocs = _interopRequireDefault(require("@docusaurus/plugin-content-docs"));
var _options = require("@docusaurus/plugin-content-docs/lib/options.js");
var _getKBarActions = require("./utils/getKBarActions");
var _logger = require("./utils/logger");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PLUGIN_ID = '@coinbase/docusaurus-plugin-kbar';
async function plugin(context, {
  docs,
  actions: customConfigActions = []
}) {
  return {
    name: PLUGIN_ID,
    async loadContent() {
      const docsPluginInstance = await (0, _pluginContentDocs.default)(context, {
        ..._options.DEFAULT_OPTIONS,
        ...docs,
        id: PLUGIN_ID
      });
      const loadedContent = await docsPluginInstance.loadContent?.();
      const currentVersion = loadedContent?.loadedVersions[0];
      if (!currentVersion) throw Error('Missing currentVersion');
      return {
        actions: (0, _getKBarActions.getKBarActions)(currentVersion)
      };
    },
    async contentLoaded({
      content,
      actions
    }) {
      const pluginData = {
        actions: [...content.actions, ...customConfigActions]
      };
      actions.setGlobalData(pluginData);
      _logger.logger.pluginComplete();
    }
  };
}