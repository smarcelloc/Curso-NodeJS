require('dotenv').config();
const app = require('./config/server');

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  process.stdout.write(`Inicializando o servidor na port: ${port}\n`);
});
