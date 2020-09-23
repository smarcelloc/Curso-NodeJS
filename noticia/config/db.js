const mysql = require('mysql')

const conexãoBD = () => {
  console.log('conexão')
  return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'portal_noticia'
  })
}

module.exports = () => {
  return conexãoBD
}