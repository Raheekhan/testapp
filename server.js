var express = require('express');

var app = express();

var http = require('http').Server(app);
var router = express.Router();

var port = 3000;
var path = __dirname + '/';

router.get('/index', (req, res) => {
  res.sendFile(path + 'index.html');
});

app.use('/', router);

http.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
