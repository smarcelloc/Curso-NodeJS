const { modules } = require("./form_inclusao_noticia")

module.exports = (app) => {
  app.get('/', (requisição, resposta) => {
    resposta.render('home/index')
  })
}