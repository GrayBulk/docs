"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plugin;
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PLUGIN_ID = '@coinbase/docusaurus-plugin-llm-dev-server';
function plugin(context, options = {}) {
  const {
    siteDir
  } = context;
  const generatorPath = options.generatorPath || _path.default.join(siteDir, 'ai-doc-generator');
  return {
    name: PLUGIN_ID,
    configureWebpack() {
      if (process.env.NODE_ENV !== 'development') {
        return {};
      }
      return {
        devServer: {
          setupMiddlewares: (middlewares, devServer) => {
            if (!devServer || !devServer.app) {
              return middlewares;
            }

            // Add middleware to handle /llms/:platform/routes.txt
            devServer.app.get('/llms/:platform/routes.txt', async (req, res) => {
              try {
                const {
                  platform
                } = req.params;

                // Validate platform
                if (!['web', 'mobile'].includes(platform)) {
                  return res.status(404).send('Platform not found');
                }
                const {
                  generateRoutesContent
                } = require(_path.default.join(generatorPath, 'generateRoutesContent.cjs'));
                const content = await generateRoutesContent(platform, siteDir);
                if (!content) {
                  return res.status(404).send('Routes not found');
                }
                res.type('text/plain');
                res.send(content);
              } catch (error) {
                console.error('Error generating routes:', error);
                res.status(500).send('Error generating routes');
              }
            });

            // Add middleware to handle /llms/* requests
            devServer.app.get('/llms/:platform/:docType/:docName', async (req, res) => {
              try {
                const {
                  platform,
                  docType,
                  docName
                } = req.params;

                // Validate inputs
                if (!['web', 'mobile'].includes(platform)) {
                  return res.status(404).send('Platform not found');
                }
                if (!['components', 'hooks', 'getting-started', 'guides'].includes(docType)) {
                  return res.status(404).send('Doc type not found');
                }
                const {
                  resolveDoc
                } = require(_path.default.join(generatorPath, 'resolveDoc.cjs'));
                const content = await resolveDoc(platform, docType, docName.replace(/\.txt$/, ''), siteDir);
                if (!content) {
                  return res.status(404).send('Doc not found');
                }
                res.type('text/plain');
                res.send(content);
              } catch (error) {
                console.error('Error generating LLM doc:', error);
                res.status(500).send('Error generating documentation');
              }
            });
            return middlewares;
          }
        }
      };
    }
  };
}