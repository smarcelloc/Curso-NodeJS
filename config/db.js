require('dotenv').config();
const mysql = require('mysql');

let conexaoDB = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portal_noticias',
  });
};

module.exports = () => {
  return conexaoDB;
};
