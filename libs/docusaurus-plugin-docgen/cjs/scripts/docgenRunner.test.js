"use strict";

var _docgenRunner = require("./docgenRunner");
function doc(displayName, filePath) {
  return {
    displayName,
    filePath
  };
}
describe('selectPrimaryDocs', () => {
  it('selects the doc whose displayName matches the filename when multiple docs share a filePath', () => {
    const filePath = '/repo/packages/web/src/numbers/RollingNumber/RollingNumber.tsx';
    const selected = (0, _docgenRunner.selectPrimaryDocs)([doc('TestComp', filePath), doc('RollingNumber', filePath)]);
    expect(selected).toHaveLength(1);
    expect(selected[0].displayName).toBe('RollingNumber');
  });
  it('falls back to the first doc when no doc matches the filename', () => {
    const filePath = '/repo/packages/web/src/numbers/RollingNumber/RollingNumber.tsx';
    const selected = (0, _docgenRunner.selectPrimaryDocs)([doc('A', filePath), doc('B', filePath)]);
    expect(selected).toHaveLength(1);
    expect(selected[0].displayName).toBe('A');
  });
  it('returns one selected doc per filePath', () => {
    const fileA = '/repo/packages/web/src/layout/Box.tsx';
    const fileB = '/repo/packages/web/src/buttons/Button.tsx';
    const selected = (0, _docgenRunner.selectPrimaryDocs)([doc('OtherBox', fileA), doc('Box', fileA), doc('Button', fileB)]);
    expect(selected.map(d => d.displayName).sort()).toEqual(['Box', 'Button']);
  });
});