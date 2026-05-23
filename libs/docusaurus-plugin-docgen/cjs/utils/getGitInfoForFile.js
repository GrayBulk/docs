"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGitInfoForFile = getGitInfoForFile;
var _nodeChild_process = require("node:child_process");
var _docgenParser = require("../scripts/docgenParser");
function trimScopeOrPr(str) {
  return str.replace('(', '').replace(')', '').replace('#', '');
}
async function gitCommand(cmd) {
  return new Promise((resolve, reject) => {
    (0, _nodeChild_process.exec)(cmd, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      const result = String(stdout);
      resolve(result);
    });
  });
}
async function getGitInfoForFile({
  file,
  repoUrl: repoPrefix
}) {
  const logs = await gitCommand(`git --no-pager log --follow --pretty=format:'%h||%at||%an||%s' -- ${file}`);
  return Promise.all(logs.split('\n').map(async line => {
    const [sha, date, author, commit] = line.split('||');
    const message = commit.replace(/\(([^()]*)\)/gm, '').trim();
    const scopeAndPr = commit.match(/\(([^()]*)\)/gm) ?? [''];
    let pr = trimScopeOrPr(scopeAndPr[0]);
    if (scopeAndPr.length > 1) {
      pr = trimScopeOrPr(scopeAndPr[1]);
    }
    const release = (await gitCommand(`git tag --contains ${sha}`)) ?? 'v1.0.0';
    return {
      sha,
      dateIso: date,
      date: `${new Date(Number(date) * 1000).toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })} PST`,
      author,
      commit: (0, _docgenParser.formatString)(message),
      commitUrl: repoPrefix ? `${repoPrefix}/commit/${sha}` : undefined,
      pr,
      release: release.split('\n')[0]
    };
  }));
}