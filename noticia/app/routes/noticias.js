module.exports = (app) => {
  app.get('/noticias', (requisição, resposta) => {
    resposta.render('noticias/noticias')
  })
}