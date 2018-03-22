module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: 'vue-express',
    user: 'root',
    password: '',
    options: {
      dialect: 'mysql',
      host: '127.0.0.1'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
