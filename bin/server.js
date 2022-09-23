// @ts-check

const path = require('path');
const next = require('next');
const express = require('express');
const nextConfig = require('../next.config');

/**
 * @remarks This function start a NextJS instance in development mode.
 * @param {number} [port] Port to bind http server default 3001
 * @param {boolean} [dev] Is starting in development default true
 * */
async function startServer(port = 3001, dev = true) {
  const http = express();
  const app = next.default({
    dev: true,
    dir: path.resolve(__dirname, ".."),
    conf: nextConfig,
  });
  const handle = app.getRequestHandler();

  await app.prepare();

  http.all("*", (req, res) => {
    return handle(req, res);
  });

  http.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}

module.exports.startServer = startServer;
