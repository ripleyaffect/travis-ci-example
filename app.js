var express = require('express');
var app = express();

var PORT = 8000;

app.get('/', function (req, res) {
  res.send('Hello world from the TravisCI example')
})

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
