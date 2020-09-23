const express = require('express')
const consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './noticia/app/views') // nível no require noticia/app.js

consign()
  .then('noticia/config/db.js')
  .include('noticia/app/routes')
  .into(app)

module.exports = { app, porta: 3000 }
