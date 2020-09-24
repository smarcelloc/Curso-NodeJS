const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))

consign()
  .then('config/db.js')
  .include('app/models')
  .include('app/routes')
  .into(app)

module.exports = app