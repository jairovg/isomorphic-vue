import express from 'express';
import { createRenderer } from 'vue-server-renderer';
// Assume that the bundled server-side code will be directly used
// by the server via required.
import createApp from '../build/server-bundle';

let server = express();

server.get('*', (req, res) => {
  const context = { url: req.url };

  createApp(context).
    then(app => {
      createRenderer({
        template: require('fs').readFileSync('./src/index.html', 'utf-8')
      }).
      renderToString(app, (err, html) => {
        if (err) {
          if (err.code === 404) {
            res.status(404).end('Page not found');
          } else {
            res.status(500).end('Internal Server Error');
          }
        } else {
          res.end(html);
        }
      });
    });
});

server.use('/dist', express.static('./build'));

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});