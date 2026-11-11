const http = require('node:http');
const { add } = require('./app');
http.createServer((req, res) => res.end(`2 + 3 = ${add(2, 3)}\n`))
    .listen(3000, () => console.log('Listening on :3000'));