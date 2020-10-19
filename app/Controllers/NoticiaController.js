const NoticiaModel = require('../Models/NoticiaModel');

module.exports = class NoticiaController {
  constructor(conexaoDB) {
    this.noticiaModel = new NoticiaModel(conexaoDB);
  }

  index(resposta) {
    this.noticiaModel.getAll((erro, resultado) => {
      resposta.render('noticia/index', { noticias: resultado || [] });
    });
  }

  show(resposta, id) {
    this.noticiaModel.get(id, (erro, resultado) => {
      if (resultado[0])
        resposta.render('noticia/show', { noticia: resultado[0] || [] });
      else resposta.redirect('/noticia');
    });
  }

  create(resposta) {
    resposta.render('noticia/create', { noticia: [] });
  }

  store(resposta, _noticia, erro) {
    if (!erro.isEmpty())
      resposta.render('noticia/create', {
        validacao: erro.array(),
        noticia: _noticia,
      });
    else
      this.noticiaModel.insert(_noticia, () => {
        resposta.redirect('/noticia');
      });
  }
};
