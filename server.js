const express = require('express')
const app = express()
const path = require('path')

app.get('/',  function(req, res){
  var DuongDanFile = path.join(__dirname, 'home.html')
  res.sendFile()
})
app.listen(3000, function(){

})