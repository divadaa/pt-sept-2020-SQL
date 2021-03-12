const router = require('express').Router()

module.exports = db => (req, res, next) => {

  // Example route
  // router.use('/examples', require('./examples')(db))

  router.use('/directors', require('./directors/getAllNames')(db))
  router.use('/directors', require('./directors/getNickQuery')(db))
  // router.use('/movies', require('./movies')(db))
  // router.use('/all', require('./directors-movies')(db))


  return router
}