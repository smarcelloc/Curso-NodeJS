require('dotenv').config()
const app = require('./config/server')


app.listen(process.env.APP_PORT, () => {
  console.log('Inicializando o servidor :)');
})