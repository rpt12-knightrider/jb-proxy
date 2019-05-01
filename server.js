var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded( {extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('hi, there');
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening at ${port}`);
});