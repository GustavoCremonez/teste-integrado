const router = require('express').Router()

const UniversityController = require('../controller/UniversityController')

router.get('/universities/:country?/:id?', UniversityController.get)
router.post('/universities', UniversityController.post)
router.put('/universities/:id', UniversityController.put)
router.delete('/universities/:id', UniversityController.remove)

module.exports = router