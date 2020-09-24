const NoticiaModel = require('../app/Models/NoticiaModel')
const { check, validationResult } = require('express-validator')

module.exports = (app) => {
  const noticiaModel = new NoticiaModel(app.config.db())
  let noticia = []

  app.get('/noticia', (requisicao, resposta) => {

    noticiaModel.getAll((erro, resultado) => {
      resposta.render('noticia/noticia', { noticias: resultado })
    })

  })

  app.get('/noticia/add', (requisicao, resposta) => {
    resposta.render('noticia/form', { noticia: noticia })
  })

  app.post('/noticia/add', [
    check('titulo', 'é obrigátorio').notEmpty(),
    check('conteudo', 'é obrigátorio').notEmpty(),
    check('conteudo', 'deve conter entre 10 a 100 caracteres').isLength({ min: 5, max: 300 })
  ], (requisicao, resposta) => {
    noticia = requisicao.body;
    const erroValidacao = validationResult(requisicao)

    if (erroValidacao.isEmpty()) {
      noticiaModel.insert(noticia, () => {
        resposta.redirect('/noticia')
      })
    } else {
      resposta.render('noticia/form', { validacao: erroValidacao.array(), noticia: noticia })
    }

  })
}