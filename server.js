var express = require('express');

var app = express();

var http = require('http').Server(app);
var router = express.Router();

// var port = 3000;
var path = __dirname + '/';

app.set('port', (process.env.PORT || 5000));

router.get('/index', (req, res) => {
  res.sendFile(path + 'index.html');
});

app.use('/', router);

http.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
});
