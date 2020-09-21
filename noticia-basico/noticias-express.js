const express = require('express')

const app = express()
const porta = 3000

app.get('/', function (requisição, resposta) {
  resposta.send('<html><body><h1>HOME</h1></body></html>')
})

app.get('/noticia', function (requisição, resposta) {
  resposta.send('<html><body><h1>PORTAL DE NOTICIAS</h1></body></html>')
})

app.get('/moda', function (requisição, resposta) {
  resposta.send('<html><body><h1>SOBRE MODA</h1></body></html>')
})

app.listen(porta, function () {
  console.log("Servidor rodando com express")
})