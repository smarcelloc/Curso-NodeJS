const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

// Configuração
app.set('view engine', 'ejs')
app.set('views', './app/Views')

// Middlewares 
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Banco de dados
app['conexaodb'] = require('../config/db')()

// Autoload para função
consign({ cwd: 'app' })
  .then('validators')
  .include('routes')
  .into(app)

module.exports = app