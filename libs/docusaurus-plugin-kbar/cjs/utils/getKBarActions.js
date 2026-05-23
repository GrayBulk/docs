"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKBarActions = getKBarActions;
var _kbar = require("kbar");
var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));
var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));
var _nodePath = _interopRequireDefault(require("node:path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getKBarActions(currentVersion) {
  function getDocInfo(id) {
    return currentVersion.docs.find(doc => doc.id === id);
  }
  function getNameForDoc(id) {
    return getDocInfo(id)?.title;
  }
  function getSlugForDoc(id) {
    return getDocInfo(id)?.slug;
  }
  function flatten(item, parent, defaultProps) {
    if (item.type === 'category') {
      const name = item.label;
      const kebabCaseId = (0, _kebabCase.default)(name);
      const id = parent ? _nodePath.default.join(parent, kebabCaseId) : kebabCaseId;
      const {
        customProps: {
          icon,
          kbar: {
            spotSquare,
            pictogram,
            priority,
            subtitle
          } = {}
        } = {}
      } = item;
      return item.items.flatMap(next => {
        return [{
          parent,
          name,
          id,
          pictogram: pictogram ?? defaultProps?.pictogram,
          spotSquare: spotSquare ?? defaultProps?.spotSquare,
          subtitle: subtitle ?? defaultProps?.subtitle,
          icon: icon ?? defaultProps?.icon,
          priority
        }, ...flatten(next, id, {
          icon
        })];
      });
    }
    if (item.type === 'doc') {
      const name = getNameForDoc(item.id);
      if (!name) console.log(`docusaurus-plugin-kbar ERROR: Could not match name for sidebar doc item ${item.id}`);
      const subtitle = item.customProps?.kbar?.description;
      const priority = item.customProps?.kbar?.priority;
      const icon = item.customProps?.icon;
      return [{
        parent,
        id: item.id,
        name: name ?? item.id,
        priority,
        subtitle: subtitle ?? defaultProps?.subtitle,
        icon: icon ?? defaultProps?.icon
      }];
    }
    if (item.type === 'ref') {
      const name = getNameForDoc(item.id);
      if (!name) console.log(`docusaurus-plugin-kbar ERROR: Could not match name for sidebar ref item ${item.id}`);
      const subtitle = item.customProps?.kbar?.description;
      const priority = item.customProps?.kbar?.priority;
      return [(0, _kbar.createAction)({
        name: name ?? item.id,
        parent,
        subtitle,
        priority
      })];
    }
    if (item.type === 'link') {
      const name = getNameForDoc(item.label);
      const isExternalLink = item.href?.startsWith('https://') || item.href?.startsWith('http://');
      if (!name && !isExternalLink) console.log(`docusaurus-plugin-kbar ERROR: Could not match name for sidebar link item ${item.label}`);
      const subtitle = item.customProps?.kbar?.description;
      const priority = item.customProps?.kbar?.priority;
      return [{
        ...(0, _kbar.createAction)({
          name: name ?? item.label,
          parent,
          subtitle,
          priority
        }),
        [isExternalLink ? 'url' : 'slug']: item.href
      }];
    }
    const name = '';
    return [(0, _kbar.createAction)({
      name,
      parent
    })];
  }
  return (0, _uniqBy.default)(currentVersion.sidebars.docs.filter(item => item.type === 'category').flatMap(item => flatten(item)), 'id').map(item => {
    const slug = getSlugForDoc(item.id);
    const frontmatter = getDocInfo(item.id)?.frontMatter;
    return {
      section: 'Documentation',
      slug,
      subtitle: frontmatter?.description,
      keywords: frontmatter?.keywords?.join(' '),
      ...item
    };
  });
}