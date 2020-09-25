module.exports = class NoticiaModel {
  constructor(conexaoDB) {
    this._conexaoDB = conexaoDB
  }

  getAll(callback) {
    this._conexaoDB.query('SELECT SUBSTRING(conteudo, 1, 100) AS conteudo, DATE_FORMAT(data_postada, "%d/%m/%Y %H:%i") as data_postada, id, titulo FROM noticias order by id desc', callback)
  }

  get(id, callback) {
    this._conexaoDB.query('SELECT DATE_FORMAT(data_postada, "%d/%m/%Y %H:%i") as data_postada,conteudo, titulo FROM noticias where id=?', id, callback)
  }

  insert(noticia, callback) {
    this._conexaoDB.query(`insert into noticias set ?`, noticia, callback)
  }
}