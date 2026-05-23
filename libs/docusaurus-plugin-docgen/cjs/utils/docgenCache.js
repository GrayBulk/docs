"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeEntryPointHash = computeEntryPointHash;
exports.loadDocgenCache = loadDocgenCache;
exports.saveDocgenCache = saveDocgenCache;
var _nodeCrypto = _interopRequireDefault(require("node:crypto"));
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _nodePath = _interopRequireDefault(require("node:path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Bump this when the parser output format changes to invalidate all caches.
 * A cache version mismatch causes a full re-parse on the next run.
 */
const CACHE_VERSION = '1';

/**
 * Compute a content hash for all source files in an entry point plus its tsconfig.
 * Changes to any file or the tsconfig will produce a different hash, triggering a re-parse.
 */
function computeEntryPointHash(absoluteFilePaths, tsconfigPath) {
  const hash = _nodeCrypto.default.createHash('md5');
  try {
    hash.update(_nodeFs.default.readFileSync(tsconfigPath, 'utf-8'));
  } catch {
    hash.update(`missing-tsconfig:${tsconfigPath}`);
  }
  for (const filePath of absoluteFilePaths.sort()) {
    try {
      hash.update(filePath);
      hash.update(_nodeFs.default.readFileSync(filePath, 'utf-8'));
    } catch {
      hash.update(`missing:${filePath}`);
    }
  }
  return hash.digest('hex');
}
function loadDocgenCache(pluginDir) {
  const cachePath = _nodePath.default.join(pluginDir, '.docgen-cache.json');
  try {
    const raw = _nodeFs.default.readFileSync(cachePath, 'utf-8');
    const data = JSON.parse(raw);
    if (data.version !== CACHE_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}
function saveDocgenCache(pluginDir, entryPoints) {
  const cachePath = _nodePath.default.join(pluginDir, '.docgen-cache.json');
  _nodeFs.default.mkdirSync(_nodePath.default.dirname(cachePath), {
    recursive: true
  });
  const data = {
    version: CACHE_VERSION,
    entryPoints
  };
  _nodeFs.default.writeFileSync(cachePath, JSON.stringify(data));
}