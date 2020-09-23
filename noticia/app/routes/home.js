module.exports = (app) => {
  app.get('/', (requisição, resposta) => {
    resposta.render('home/index')
  })
}