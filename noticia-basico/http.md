# HTTP
O módulo do JS para requisição em HTTP.

```js
const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200 // sucesso
  res.setHeader('Content-Type', 'text/plain')
  res.end('Olá Mundo!n') // coteúdo da página
})

server.listen(port, () => {
  console.log(`Servidor iniciou em http://localhost:${port}/`)
})
```

## Métodos de requisição
```js
> require('http').METHODS
[ 'ACL',
  'BIND',
  'CHECKOUT',
  'CONNECT',
  'COPY',
  'DELETE',
  'GET',
  'HEAD',
  'LINK',
  'LOCK',
  'M-SEARCH',
  'MERGE',
  'MKACTIVITY',
  'MKCALENDAR',
  'MKCOL',
  'MOVE',
  'NOTIFY',
  'OPTIONS',
  'PATCH',
  'POST',
  'PROPFIND',
  'PROPPATCH',
  'PURGE',
  'PUT',
  'REBIND',
  'REPORT',
  'SEARCH',
  'SUBSCRIBE',
  'TRACE',
  'UNBIND',
  'UNLINK',
  'UNLOCK',
  'UNSUBSCRIBE' ]
```

Os métodos mais importantes para uma API, seria: `POST`, `PUT`, `PATCH`, `OPTIONS`, `HEAD`, `TRACE`, `CONNECT`, `DELETE` e `GET`. 

- **GET**: é utilizado para buscar dados em APIs.
- **POST**: serve para cadastrar dados na API.
- **PUT**: cadastrar ou atualizar todos os dados na API.
- **PATCH**: atualizar parcialmente alguns dados na API.
- **DELETE**: para deletar dados na API.

- **TRACE**: executa os testes chamado *loop-back* (testar o envio dos dados na API)
- **CONNECT**: realiza a conexão, ou seja, `CONNECT www.exemplo.com:443 HTTP/1.1`

- **HEAD**: definição de cabeçalho `<head>` da API. Somente retorna `GET`.
- **OPTIONS**: solicita opções de comunicação permitidas para um determinado URL ou servidor.

## Código de Respostas
```js
> require('http').STATUS_CODES
{ '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
  '208': 'Already Reported',
  '226': 'IM Used',
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Found',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '307': 'Temporary Redirect',
  '308': 'Permanent Redirect',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Payload Too Large',
  '414': 'URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': 'I am a teapot',
  '421': 'Misdirected Request',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Unordered Collection',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '451': 'Unavailable For Legal Reasons',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '508': 'Loop Detected',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required' }
```

### http.createServer()
Retorna uma nova instância da classe http.Server e seu uso é muito simples:

```js
const server = http.createServer((req, res) => {
  //cada requisição recebida dispara este callback
})
```

### http.request()
Realiza uma requisição HTTP para um servidor, criando uma instância da classe http.ClientRequest.

### http.get()
Similar ao **http.request()**, mas automaticamente define o método HTTP como GET e já finaliza a requisição com **req.end()** automaticamente.

- http.Agent
- http.ClientRequest
- http.Server
- http.ServerResponde
- http.IncomingMessage

Objetos res/response possuem alguns métodos para interagir com os cabeçalhos HTTP:

- **getHeadernames()** traz a lista de nomes dos header presentes na resposta;
- **getHeaders()** traz uma cópia dos headers presentes;
- **setHeader(‘nome’, valor)** altera o valor de um header;
- **getHeader(‘nome’)** retorna o valor de um header;
- **removeHeader(‘nome’)** remove um header;
- **hasHeader(‘nome’)** retorna true se a response possui este header;
- **headersSent()** retorna true se os headers já foram enviados ao cliente;