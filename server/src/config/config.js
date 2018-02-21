module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: 'vue-express',
    user: 'root',
    password: '',
    options: {
      dialect: 'mysql',
      host: 'localhost'
    }
  }
}