const { check } = require('express-validator')
const post = [
    check('titulo', 'é obrigátorio').notEmpty(),
    check('conteudo', 'é obrigátorio').notEmpty(),
    check('conteudo', 'deve conter entre 10 a 100 caracteres').isLength({ min: 5, max: 300 })
]

module.exports = { post }