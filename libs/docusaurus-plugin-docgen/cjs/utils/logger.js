"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;
var _logger = _interopRequireDefault(require("@docusaurus/logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PREFIX = 'docusaurus-plugin-docgen';
const logger = exports.logger = {
  init: () => {
    _logger.default.info(`${PREFIX}: Checking config`);
  },
  enabledOff: () => {
    _logger.default.info(`${PREFIX}: enabled:false. Skipping...`);
  },
  matchingDocError: name => {
    _logger.default.error(`${PREFIX}: Unable to find matching category for ${name}`);
  },
  preppingData: () => {
    _logger.default.info(`${PREFIX}: Prepping data`);
  },
  forceIsTrue: () => {
    _logger.default.info(`${PREFIX}: forceDocs: true. Overwritting...`);
  },
  forceIsFalse: dir => {
    _logger.default.info(`${PREFIX}: forceDocs: false & ${dir} already exists. Skipping...`);
  },
  preppingDoc: doc => {
    _logger.default.info(`${PREFIX}: ${doc} has not been generated yet. Prepping...`);
  },
  cacheHit: entryPoint => {
    _logger.default.info(`${PREFIX}: Cache hit for ${entryPoint}, skipping parse`);
  },
  cacheMiss: entryPoint => {
    _logger.default.info(`${PREFIX}: Cache miss for ${entryPoint}, parsing...`);
  },
  writingData: () => {
    _logger.default.info(`${PREFIX}: Writing data...`);
  },
  pluginComplete: () => {
    _logger.default.success(`${PREFIX}: Success`);
  }
};