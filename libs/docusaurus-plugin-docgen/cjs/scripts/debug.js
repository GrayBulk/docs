"use strict";

var _nodePath = _interopRequireDefault(require("node:path"));
var _docgenRunner = require("./docgenRunner");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const sourceFiles = ['accordion/Accordion', 'accordion/AccordionItem', 'layout/Box', 'layout/HStack', 'layout/VStack', 'layout/Group', 'buttons/Button', 'buttons/ButtonGroup', 'system/Pressable', 'system/PressableOpacity', 'cells/Cell', 'cells/CellAccessory', 'cells/CellDetail', 'cells/CellMedia', 'cells/ListCell', 'cells/ListCellFallback', 'cells/ContentCell', 'cells/ContentCellFallback', 'controls/Checkbox'];
const rootPath = process.env.PROJECT_CWD ?? process.env.NX_MONOREPO_ROOT ?? '';
async function debug() {
  const testsDir = _nodePath.default.resolve(__dirname, '../../__tests__');
  const webTsconfig = _nodePath.default.resolve(rootPath, 'packages/web/tsconfig.json');
  const mobileTsconfig = _nodePath.default.resolve(rootPath, 'packages/mobile/tsconfig.json');
  const docs = await (0, _docgenRunner.docgenRunner)({
    entryPoints: [webTsconfig, mobileTsconfig],
    sourceFiles,
    docsDir: _nodePath.default.resolve(testsDir, 'docs'),
    pluginDir: _nodePath.default.resolve(testsDir, '.docusaurus')
  });
  console.log(docs);
}
void debug();