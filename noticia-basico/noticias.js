const http = require('http')
const porta = 3000

http.createServer(function (requisição, resposta) {

  let urlCategoria = requisição.url // http://localhost [/aqui ele pega]

  switch (urlCategoria.toLowerCase()) {
    case '/noticia': // http://localhost/noticia
      resposta.end('<html><body><h1>PORTAL DE NOTICIAS</h1></body></html>')
      break;
    case '/moda':// http://localhost/moda
      resposta.end('<html><body><h1>PORTAL DE MODA</h1></body></html>')
      break
    default:
      resposta.end('<html><body><h1>NÃO ENCONTRADO</h1></body></html>')
      break;
  }

}).listen(porta)