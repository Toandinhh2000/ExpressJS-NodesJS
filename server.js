const express = require('express');
var app = express();
var router1 = express.Router();
var router2 = express.Router();




app.get('/', (req, res) => {
  res.json('Home')
})

app.listen(3000, () => {
  console.log(`Server started on port`);
}