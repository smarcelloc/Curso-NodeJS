const express = require('express')

const app = express()
const porta = 3000

// Definir a utilização do EJS
app.set('view engine', 'ejs') // vai buscar no diretório view
app.set('views', __dirname + '/views')

app.get('/', function (requisição, resposta) {
  resposta.send('<html><body><h1>HOME</h1></body></html>' + __dirname)
})

app.get('/noticia', function (requisição, resposta) {
  resposta.send('<html><body><h1>PORTAL DE NOTICIAS</h1></body></html>')
})

app.get('/moda', function (requisição, resposta) {
  //resposta.send('<html><body><h1>SOBRE MODA</h1></body></html>')
  resposta.render('categoria/moda')
})

app.listen(porta, function () {
  console.log("Servidor rodando com express")
})