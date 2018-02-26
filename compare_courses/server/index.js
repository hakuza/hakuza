const express = require('express');
const app = express();

app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
})

app.use(express.static(__dirname + '/../public'));

const port = 3004;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
})