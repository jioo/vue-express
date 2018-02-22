const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please enter valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Please enter password'
          })
          break
        default:
          break
      }
    } else {
      next()
    }
  }
}
