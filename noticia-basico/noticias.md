# Noticias.js
Importar o módulo **http**
`const http = require('http')`
ou 
`import { createServer } from 'http';`

## Criar servidor
O comando `createServer` permite criar um servidor, além do mais o `listen(porta)` é a definição da porta.

```js
http.createServer(function (request, response) {
  // code...
}).listen(3000)
```

## URL
Se acessar no navegador `http://localhost:3000/moda` não vai direcionar para nenhuma página, como o Apache.

Para isso devemos utilizar:
```js
http.createServer(function (requisição, resposta) {

  let urlCategoria = requisição.url

}).listen(3000)
```

Na barra de endereço do navegador `http://localhost:3000/moda`, a função `requisição.url` somente captura `/moda`. 

Por exemplo de utilização:
```js
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
```
