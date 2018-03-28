const path = require('path')

module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: 'vue-express',
    user: 'root',
    password: '',
    options: {
      dialect: 'mysql',
      host: '127.0.0.1',
      storage: path.resolve(__dirname, '../../tabtracker.sql')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
