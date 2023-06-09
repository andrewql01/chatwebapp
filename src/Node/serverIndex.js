const express = require('express')
const app = express()
const port = 3001
const db = require('./databasePG.js')
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
})

app.get('/', db.GetUsers)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})