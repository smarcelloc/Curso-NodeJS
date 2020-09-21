const http = require('http')

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

}).listen(3000) //porta para escudar o servidor

// PARA O NAVEGADOR ENTRAR http://localhost:3000

// ELE NÃO ENTENDE O REQUEST http://localhost/moda