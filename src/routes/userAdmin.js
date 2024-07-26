const express = require('express')
const router = express.Router()
const adminController = require('../controllers/userAdmin')

router
.post('/login', adminController.loginUser)
.post('/register', adminController.registerUser)

module.exports = router