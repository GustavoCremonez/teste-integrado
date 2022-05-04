const router = require('express').Router()

const UniversityController = require('../controller/UniversityController')

router.get('/universities/:id?:country?', UniversityController.get)

module.exports = router