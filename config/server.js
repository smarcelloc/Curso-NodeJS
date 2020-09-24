const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

// Configuração
app.set('view engine', 'ejs')
app.set('views', './app/Views')

// Middlewares 
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Autoload
consign()
  .then('config/db.js')
  .include('routes')
  .into(app)

module.exports = app