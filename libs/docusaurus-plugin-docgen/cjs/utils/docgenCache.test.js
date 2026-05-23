"use strict";

var _nodeFs = _interopRequireDefault(require("node:fs"));
var _nodeOs = _interopRequireDefault(require("node:os"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _docgenCache = require("./docgenCache");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function createTempDir() {
  return _nodeFs.default.mkdtempSync(_nodePath.default.join(_nodeOs.default.tmpdir(), 'docgen-cache-test-'));
}
function createTempFile(dir, name, content) {
  const filePath = _nodePath.default.join(dir, name);
  _nodeFs.default.writeFileSync(filePath, content, 'utf-8');
  return filePath;
}
function mockDoc(displayName) {
  return {
    displayName,
    filePath: `/mock/${displayName}.tsx`
  };
}
function mockPropItem(name, parent) {
  return {
    name,
    parent,
    type: 'string'
  };
}
function mockCacheEntry(overrides) {
  return {
    hash: 'abc123',
    docs: [mockDoc('Button')],
    parentTypeProps: [mockPropItem('onClick', 'HTMLAttributes')],
    typeAliases: [['SpacingValue', 'number | string']],
    ...overrides
  };
}
describe('computeEntryPointHash', () => {
  let tempDir;
  beforeEach(() => {
    tempDir = createTempDir();
  });
  afterEach(() => {
    _nodeFs.default.rmSync(tempDir, {
      recursive: true,
      force: true
    });
  });
  it('returns a consistent hash for the same files and tsconfig', () => {
    const tsconfig = createTempFile(tempDir, 'tsconfig.json', '{"compilerOptions": {}}');
    const fileA = createTempFile(tempDir, 'a.tsx', 'export const A = 1;');
    const fileB = createTempFile(tempDir, 'b.tsx', 'export const B = 2;');
    const hash1 = (0, _docgenCache.computeEntryPointHash)([fileA, fileB], tsconfig);
    const hash2 = (0, _docgenCache.computeEntryPointHash)([fileA, fileB], tsconfig);
    expect(hash1).toBe(hash2);
  });
  it('produces the same hash regardless of file order', () => {
    const tsconfig = createTempFile(tempDir, 'tsconfig.json', '{}');
    const fileA = createTempFile(tempDir, 'a.tsx', 'A');
    const fileB = createTempFile(tempDir, 'b.tsx', 'B');
    const hash1 = (0, _docgenCache.computeEntryPointHash)([fileA, fileB], tsconfig);
    const hash2 = (0, _docgenCache.computeEntryPointHash)([fileB, fileA], tsconfig);
    expect(hash1).toBe(hash2);
  });
  it('produces a different hash when a source file changes', () => {
    const tsconfig = createTempFile(tempDir, 'tsconfig.json', '{}');
    const file = createTempFile(tempDir, 'comp.tsx', 'version 1');
    const hash1 = (0, _docgenCache.computeEntryPointHash)([file], tsconfig);
    _nodeFs.default.writeFileSync(file, 'version 2', 'utf-8');
    const hash2 = (0, _docgenCache.computeEntryPointHash)([file], tsconfig);
    expect(hash1).not.toBe(hash2);
  });
  it('produces a different hash when the tsconfig changes', () => {
    const tsconfig = createTempFile(tempDir, 'tsconfig.json', '{"v": 1}');
    const file = createTempFile(tempDir, 'comp.tsx', 'unchanged');
    const hash1 = (0, _docgenCache.computeEntryPointHash)([file], tsconfig);
    _nodeFs.default.writeFileSync(tsconfig, '{"v": 2}', 'utf-8');
    const hash2 = (0, _docgenCache.computeEntryPointHash)([file], tsconfig);
    expect(hash1).not.toBe(hash2);
  });
  it('handles missing files gracefully', () => {
    const tsconfig = createTempFile(tempDir, 'tsconfig.json', '{}');
    const missingFile = _nodePath.default.join(tempDir, 'does-not-exist.tsx');
    expect(() => (0, _docgenCache.computeEntryPointHash)([missingFile], tsconfig)).not.toThrow();
  });
});
describe('saveDocgenCache / loadDocgenCache', () => {
  let tempDir;
  beforeEach(() => {
    tempDir = createTempDir();
  });
  afterEach(() => {
    _nodeFs.default.rmSync(tempDir, {
      recursive: true,
      force: true
    });
  });
  it('round-trips cache data through save and load', () => {
    const entry = mockCacheEntry();
    (0, _docgenCache.saveDocgenCache)(tempDir, {
      '/path/to/tsconfig.json': entry
    });
    const loaded = (0, _docgenCache.loadDocgenCache)(tempDir);
    expect(loaded).not.toBeNull();
    expect(loaded.entryPoints['/path/to/tsconfig.json']).toEqual(entry);
  });
  it('returns null when no cache file exists', () => {
    const loaded = (0, _docgenCache.loadDocgenCache)(tempDir);
    expect(loaded).toBeNull();
  });
  it('returns null when cache file contains invalid JSON', () => {
    _nodeFs.default.writeFileSync(_nodePath.default.join(tempDir, '.docgen-cache.json'), 'not json', 'utf-8');
    const loaded = (0, _docgenCache.loadDocgenCache)(tempDir);
    expect(loaded).toBeNull();
  });
  it('returns null when cache version does not match', () => {
    const staleCache = {
      version: '0',
      entryPoints: {}
    };
    _nodeFs.default.writeFileSync(_nodePath.default.join(tempDir, '.docgen-cache.json'), JSON.stringify(staleCache), 'utf-8');
    const loaded = (0, _docgenCache.loadDocgenCache)(tempDir);
    expect(loaded).toBeNull();
  });
  it('preserves multiple entry points', () => {
    const entryA = mockCacheEntry({
      hash: 'aaa'
    });
    const entryB = mockCacheEntry({
      hash: 'bbb',
      docs: [mockDoc('Avatar')]
    });
    (0, _docgenCache.saveDocgenCache)(tempDir, {
      '/packages/web/tsconfig.json': entryA,
      '/packages/mobile/tsconfig.json': entryB
    });
    const loaded = (0, _docgenCache.loadDocgenCache)(tempDir);
    expect(loaded.entryPoints['/packages/web/tsconfig.json'].hash).toBe('aaa');
    expect(loaded.entryPoints['/packages/mobile/tsconfig.json'].hash).toBe('bbb');
    expect(loaded.entryPoints['/packages/mobile/tsconfig.json'].docs[0].displayName).toBe('Avatar');
  });
  it('overwrites previous cache on save', () => {
    (0, _docgenCache.saveDocgenCache)(tempDir, {
      '/a': mockCacheEntry({
        hash: 'first'
      })
    });
    (0, _docgenCache.saveDocgenCache)(tempDir, {
      '/b': mockCacheEntry({
        hash: 'second'
      })
    });
    const loaded = (0, _docgenCache.loadDocgenCache)(tempDir);
    expect(loaded.entryPoints['/a']).toBeUndefined();
    expect(loaded.entryPoints['/b'].hash).toBe('second');
  });
});