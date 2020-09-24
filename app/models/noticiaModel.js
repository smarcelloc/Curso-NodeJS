module.exports = class NoticiaModel {
  constructor(conexaoDB) {
    this._conexaoDB = conexaoDB
  }

  getAll(callback) {
    this._conexaoDB.query('select * from noticias', callback)
  }

  insert(noticia, callback) {
    this._conexaoDB.query(`insert into noticias set ?`, noticia, callback)
  }
}