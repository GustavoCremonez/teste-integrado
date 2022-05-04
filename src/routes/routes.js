const router = require('express').Router()

const UniversityController = require('../controller/UniversityController')

router.get('/universities/:country?', UniversityController.get)
router.get('/universities/:id', UniversityController.getById)
router.post('/universities', UniversityController.post)
router.put('/universities/:id', UniversityController.put)

module.exports = router