import path from 'path';
import express from 'express';
import { createBundleRenderer } from 'vue-server-renderer';

const clientManifest = require('../build/vue-ssr-client-manifest.json');
const serverBundle = require('../build/vue-ssr-server-bundle.json');
const render = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./src/index.html', 'utf-8'),
  clientManifest,
});

let server = express();

// Static folders needs to be before routes, otherwise the are going to be resolved by the router
const buildFolder = path.resolve(__dirname, '..', 'build');
server.use('/dist', express.static(buildFolder));

server.get('*', (req, res) => {
  const context = { url: req.url };

  render.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        console.log(`Error: ${err}`);
        res.status(500).end('Internal Server Error');
      }
    } else {
      res.end(html);
    }
  });
});

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
