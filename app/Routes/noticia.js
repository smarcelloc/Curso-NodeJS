const NoticiaControllers = require('../Controllers/NoticiaController');
const { validationResult } = require('express-validator');

module.exports = (app) => {
  const noticiaController = new NoticiaControllers(app.conexaodb());

  app.get(['/noticia', '/'], (requisicao, resposta) => {
    let noticiaID = Number.parseInt(requisicao.query.id);

    if (!isNaN(noticiaID) || noticiaID > 0) {
      noticiaController.show(resposta, noticiaID);
    } else {
      noticiaController.index(resposta);
    }
  });

  app.get('/noticia/add', (requisicao, resposta) => {
    noticiaController.create(resposta);
  });

  app.post(
    '/noticia/add',
    app.validators.noticia.rules,
    (requisicao, resposta) => {
      const noticia = requisicao.body;
      const erro = validationResult(requisicao);
      noticiaController.store(resposta, noticia, erro);
    }
  );
};
