# Notícias Express

Com a utilização do framework **Express JS** facilita e organiza caminho de *rodas* na API.

### Importação do express
- `const express = require('express')` importação
- `const app = express()` criação da aplicação para suportar rodas HTTP
- `const porta = 3000` definição de porta

### Roda a aplicação

Para executar a aplicação devemos definir a porta e função `callback`.

```js
app.listen(porta, /* função de callback */function () { 
  console.log("Servidor rodando com express")
})
```

### Definição de rotas

Como já vimos, o Node.JS não funciona como o servidor APACHE para entrar na página, por exemplo: `http:localhost:3000/moda`. 

Node.js precisamos definir uma rota de `/moda`, já no APACHE não é necessário.

```js
app.get('/moda', function (requisição, resposta) {
  resposta.send('<html><body><h1>SOBRE MODA</h1></body></html>')
  // Lembra http sem express é o método resposta.end (...)
})
```

## EJS
Chama-se Embedded JavaScript templating (EJS) e é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples, em outra palavra, PERMITE FAZER PÁGINA DINÂMICA.

Precisamos definir a utilização do EJS na VIEWS `app.set('view engine', 'ejs')`, desta forma, o framework vai buscar o diretório `/views` na raiz do projeto.

> Caso deseja modificar o caminho da views, use: `app.set('views', __dirname + '/views')`
> O `__dirname` vai capturar o caminho absoluto da aplicação, por exemplo `C:\Users\Marcello\Documents\CursoNodeJS\noticia-basico`

### Renderização para HTML + EJS
- Devemos criar página HTML do tipo `.ejs`, ou seja, `moda.ejs`. 
- Definir o renderização da view ejs, usando `resposta.render('categoria/moda')`. Afim de entendemos ficaria assim o diretório `C:\Users\Marcello\Documents\CursoNodeJS\noticia-basico\views\categoria\moda.ejs`
```js
app.get('/moda', function (requisição, resposta) {
  resposta.render('categoria/moda')
})
``` 
> Não precisa explicitar a extensão `.ejs` da `categoria/moda` o programa já entende. 