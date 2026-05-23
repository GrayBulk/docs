"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docgenWriter = docgenWriter;
exports.writeFile = writeFile;
var _ejs = _interopRequireDefault(require("ejs"));
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));
var _startCase = _interopRequireDefault(require("lodash/startCase"));
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _nodePath = _interopRequireDefault(require("node:path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const writeConfig = {
  encoding: 'utf8',
  flag: 'w'
};
const helpers = {
  camelCase: _camelCase.default,
  kebabCase: _kebabCase.default,
  pascalCase: str => (0, _startCase.default)(str).split(' ').join(''),
  startCase: _startCase.default
};
async function writeFile({
  dest,
  data
}) {
  const content = typeof data === 'string' ? data : JSON.stringify(data);
  const dirForFile = _nodePath.default.dirname(dest);
  await _nodeFs.default.promises.mkdir(dirForFile, {
    recursive: true
  });
  return _nodeFs.default.promises.writeFile(dest, content, writeConfig);
}
const templatesDir = _nodePath.default.join(__dirname, '../templates');

/**
 * Writes the content passed from docgenRunner to disk based on plugin config.
 */
async function docgenWriter(files) {
  return Promise.all(files.map(async item => {
    const contents = await _ejs.default.renderFile(_nodePath.default.join(templatesDir, `${item.template}.ejs.t`), {
      data: item.data,
      h: helpers
    });
    return writeFile({
      dest: item.dest,
      data: contents
    });
  }));
}