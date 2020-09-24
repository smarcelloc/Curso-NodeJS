module.exports = (app) => {

  const noticiaModel = app.app.models.noticiaModel

  app.get('/noticia', (requisicao, resposta) => {

    noticiaModel.getAll((erro, resultado) => {
      resposta.render('noticia/noticia', { noticias: resultado })
    })

  })

  app.get('/noticia/add', (requisicao, resposta) => {
    resposta.render('noticia/form')
  })

  app.post('/noticia/add', (requisicao, resposta) => {
    let noticia = requisicao.body;
    noticiaModel.insert(noticia, () => {
      resposta.redirect('/noticia')
    })
  })
}