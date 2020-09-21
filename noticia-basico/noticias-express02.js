const express = require('express')

const app = express()
const porta = 3000

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views02`)


app.get('/', (requisição, resposta) => {
  resposta.render('home/index')
})

app.get('/admin', (requisição, resposta) => {
  resposta.render('admin/form_add_noticia')
})

app.get('/noticias', (requisição, resposta) => {
  resposta.render('noticias/noticias')
})

app.listen(porta, () => {
  console.log('Servidor inicializando em EXPRESS.JS')
})