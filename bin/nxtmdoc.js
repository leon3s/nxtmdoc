#!/usr/bin/env node

// @ts-check

const path = require('path');

const {program} = require('commander');

const {runDev} = require('./dev');

program
  .name('nxtmdoc')
  .description('Generate your website from Markdown').version('0.0.1');

  program.command('dev')
    .description('Start nxtmdoc in development mode.')
    .option("-p, --port <number>", "port used to serve the website", "3001")
    .action((options) => {
      const port = Number(options.port);
      if (isNaN(port)) {
        console.error("Provided port is not a number");
        process.exit(1);
      }
      runDev().catch((err) => {
        console.error(err);
      });
    });

program.parse();
