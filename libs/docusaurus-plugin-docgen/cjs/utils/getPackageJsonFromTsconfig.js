"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPackageJsonFromTsconfig = getPackageJsonFromTsconfig;
var _nodePath = _interopRequireDefault(require("node:path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const cache = {};
function getPackageJsonFromTsconfig(tsconfigPath) {
  if (cache[tsconfigPath]) {
    return cache[tsconfigPath];
  }
  const packageDirname = _nodePath.default.dirname(tsconfigPath);
  const packageJsonPath = _nodePath.default.resolve(packageDirname, 'package.json');
  const packageJson = require(packageJsonPath);
  cache[tsconfigPath] = packageJson;
  return packageJson;
}