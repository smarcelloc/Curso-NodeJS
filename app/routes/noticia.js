module.exports = (app) => {

  const noticiaModel = app.app.models.noticiaModel

  app.get('/noticia', (requisicao, resposta) => {

    noticiaModel.getAll((erro, resultado) => {
      resposta.render('noticia/noticia', { noticias: resultado })
    })

  })
}