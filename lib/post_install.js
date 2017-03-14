/* eslint-disable global-require, import/no-extraneous-dependencies */
let execSync = require('child_process').execSync;
const stat = require('fs').stat;

// Node 0.10 check
if (!execSync) {
  execSync = require('sync-exec');
}

function exec(command) {
  execSync(command, {
    stdio: [0, 1, 2]
  });
}

stat('dist', (error, distStat) => {
  // Skip building on Travis
  if (process.env.TRAVIS) {
    return;
  }

  if (error || !distStat.isDirectory()) {
    exec('npm i babel-cli babel-preset-es2015 babel-preset-react');
    exec('npm run dist:modules');
  }
});
