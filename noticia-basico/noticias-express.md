# Notícias Express

Com a utilização do framework **Express JS** facilita e organiza caminho de *rodas* na API.

## Importação do express
- `const express = require('express')` importação
- `const app = express()` criação da aplicação para suportar rodas HTTP
- `const porta = 3000` definição de porta

## Roda a aplicação

Para executar a aplicação devemos definir a porta e função `callback`.

```js
app.listen(porta, /* função de callback */function () { 
  console.log("Servidor rodando com express")
})
```

## Definição de rotas

Como já vimos, o Node.JS não funciona como o servidor APACHE para entrar na página, por exemplo: `http:localhost:3000/moda`. 

Node.js precisamos definir uma rota de `/moda`, já no APACHE não é necessário.

```js
app.get('/moda', function (requisição, resposta) {
  resposta.send('<html><body><h1>SOBRE MODA</h1></body></html>')
  // Lembra http sem express é o método resposta.end (...)
})
```