"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;
var _logger = _interopRequireDefault(require("@docusaurus/logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PREFIX = 'docusaurus-plugin-kbar';
const logger = exports.logger = {
  init: () => {
    _logger.default.info(`${PREFIX}: Checking config`);
  },
  pluginComplete: () => {
    _logger.default.success(`${PREFIX}: Success`);
  }
};