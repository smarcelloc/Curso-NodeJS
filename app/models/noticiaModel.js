module.exports = (app) => {

  const conexãoDB = app.config.db()

  this.getAll = (callback) => {
    conexãoDB.query('select * from noticias', callback)
  }

  this.insert = (noticia, callback) => {
    conexãoDB.query(`insert into noticias set ?`, noticia, callback)
  }

  return this
}