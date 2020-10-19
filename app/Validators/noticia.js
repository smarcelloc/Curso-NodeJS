const { check } = require('express-validator');
const rules = [
  check('titulo', 'é obrigátorio').notEmpty(),
  check('titulo', 'máximo de 200 caracteres').isLength({ max: 200 }),
  check('conteudo', 'é obrigátorio').notEmpty(),
  check('conteudo', 'deve conter entre 10 a 500 caracteres').isLength({
    min: 5,
    max: 500,
  }),
];

module.exports = { rules };
