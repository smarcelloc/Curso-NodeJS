const express = require('express')
const consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'app/views')

consign()
  .then('config/db.js')
  .include('app/models')
  .include('app/routes')
  .into(app)

module.exports = app