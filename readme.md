# NODE.JS
> Interpretador em JS em BACK-END

O Node.js pode ser definido como um ambiente de **execução Javascript server-side (back-end).** 

Apesar de recente, o Node.js já é utilizado por grandes empresas no mercado de tecnologia, como Netflix, Uber e LinkedIn.

## Inicialização do servidor
Neste caso, vamos utilizar o módulo **Nodemon** para start o serviços:

Vamos inicializar conforme o valor `main`:`index.js` em `package.json`
```sh
npm nodemon app
```
ou inicializar onde você direciona o arquivo `.js` para inicializar o servidor
```sh
npm nodemon [diretorio/arq.js]
```

## Vantagens 
- [x] Alta Capacidade de Escala (agregar mais recursos)
- [x] Flexibilidade
- [x] Leveza
- [x] Baixo custo

Ideal a sua utilização para arquitetura com *microserver* e *serveless*, projetos grandes para implementação de muitos recursos.

## História
A linguagem Javascript foi criado em 1995, pelo Brendan Eich em prol de interação com documentos HTML, mas sendo **client-side**.

Houve diversas tentativas para implementar o Javascript para **server-side**, porém falharam porque tem baixa performance comparado com PHP e JAVA WEB.

Todavia, com o surgimento do **motor V8** em Javascript no navegador Chrome. Em 2009 é lançado o **NodeJS** para aplicação em **server-side** em sua camada este motor de JS.

## Característica
O diferencial entre o NodeJS para os PHP e Java WEB é a sua execução ser **single-thread** e não **multi-thread**.

No multi-thread no PHP e JAVA WEB, cada requisição cria uma nova thred e gasta recursos físicos e são limitados no servidor. Além disso, cada requisição o usuário deve esperar a resposta em HTTP (carregar a página WEB). 

Porém, o single-thread do NODEJS trás de uma thread chamada **Event Loop**, que trata das requisições feitas pelos usuários e é assíncronas e não bloqueiam as requesições dos usuários (concorrentes), fazendo uma pilha de eventos (requisições).

> Atenção: NODE.JS o limita as requisições devido ao alto consumo computacional pela criação.

![Modelo Tradicional x Modelo NodeJS](/readme_img/modelo.png)

## Referências
- [Node.js – O que é, como funciona e quais as vantagens
](https://www.opus-software.com.br/node-js/)