const express = require('express');
var app = express();
var Router = require('./apiRouter.js');

app.get('/', (req, res) => {
  res.json('Home');
});


app.use('/admin/api/v1', Router);
app.use('/api/v1', Router);

//localhost:3000/api1/

app.listen(3000, () => {
  console.log(`Server started on port`);
});