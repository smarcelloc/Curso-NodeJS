module.exports = (app) => {

  const conexãoDB = app.config.db()

  this.getAll = (callback) => {
    conexãoDB.query('select * from noticias', callback)
  }

  return this
}