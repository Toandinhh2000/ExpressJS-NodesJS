const express = require('express')
const app = express()
const path = require('path')
const router = require('./userRouter')
const userRouter = require('./userRouter')
var bodyParser = require('body-parser')
var duongDanPublic = path.join(__dirname, 'public')

// parse application/x-www-form-ulencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

const AccountModel1 = require('./models/Account')
const PAGE_SIZE = 2

app.get('./home', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})