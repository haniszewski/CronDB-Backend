const express = require('express');
const ormConfig = require('../ormconfig.json');
const {createConnection} = require('typeorm');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

createConnection(ormConfig)
  .then(() => {
    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  })
  .catch((error) => {
    console.log(error);
  });
