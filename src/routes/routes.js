const router = require('express').Router()

const UniversityController = require('../controller/UniversityController')

router.get('/universities/:country?', UniversityController.get)
router.get('/university/:id', UniversityController.getById)
router.post('/universities', UniversityController.post)
router.put('/universities/:id', UniversityController.put)
router.delete('/universities/:id', UniversityController.remove)
router.get('/universities/fillDataBase/:country', UniversityController.apiFillDataBase)

module.exports = router