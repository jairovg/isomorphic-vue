import express from 'express';
import { createBundleRenderer } from 'vue-server-renderer';

const serverBundle = require('../build/vue-ssr-server-bundle.json');
const render = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./src/index.html', 'utf-8'),
});

let server = express();

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

server.use('/dist', express.static('./build'));

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
