const express = require('express')
const router = express.Router()
const petugasController = require('../controllers/userPetugas')

router
.post('/login', petugasController.loginUser)
.post('/register', petugasController.registerUser)

module.exports = router