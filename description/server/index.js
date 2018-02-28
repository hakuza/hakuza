const express = require('express');
const app = express();
const Udemy = require('../database/index.js');

app.use(express.static('./public'));

app.get('/description', (request, response) => {
  Udemy.find((err, results) => {
    if (err) {
      response.send(500);
    } else {
      response.json(results);
    }
  });
});

app.get("/description", (response, request) => {});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
