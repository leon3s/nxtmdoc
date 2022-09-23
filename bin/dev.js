// @ts-check

const {startServer} = require('./server');
const {buildSources, watchSources} = require('./build');

async function runDev() {
  await buildSources();
  await watchSources();
  await startServer(3001, true);
}

module.exports.runDev = runDev;
