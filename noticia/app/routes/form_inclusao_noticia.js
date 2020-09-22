module.exports = (app) => {
  app.get('/admin', (requisição, resposta) => {
    resposta.render('admin/form_add_noticia')
  })
}