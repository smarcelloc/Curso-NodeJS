const express = require('express')
const app = express()
const porta = 3000


app.set('view engine', 'ejs')
app.set('views', './noticia/app/views') // nível no require noticia/app.js

module.exports = { app, porta }
