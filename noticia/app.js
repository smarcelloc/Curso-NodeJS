const server = require('./config/server')
const rotaNoticias = require('./app/routes/noticias')
const rotaHome = require('./app/routes/home')
const rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_noticia')

rotaNoticias(server.app)
rotaHome(server.app)
rotaFormInclusaoNoticia(server.app)

server.app.listen(server.porta, () => {
  console.log('Inicializando o servidor NOTICIA');
})
