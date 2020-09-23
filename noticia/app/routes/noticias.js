//const conexãoBD = require('./../../config/db')

module.exports = (app) => {
  let conexãoBD = app.noticia.config.db();

  app.get('/noticias', (requisição, resposta) => {
    conexãoBD.query('select * from noticias', (erro, resultado) => {
      resposta.render('noticias/noticias', { noticias: resultado })
    })
  })
}