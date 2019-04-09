var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded( {extended: false }));

app.get('/', (req, res) => {
  res.send('hi, there');
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening at ${port}`);
});