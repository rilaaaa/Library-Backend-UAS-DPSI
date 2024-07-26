const express = require('express')
const router = express.Router()
const pengembalianController = require('../controllers/pengembalian')
const { protect, validatePetugas } = require('../middleware/auth')

router
    .post('/addpengembalian', protect, validatePetugas, pengembalianController.addPengembalian)
    .get('/', protect, pengembalianController.getAllPengembalian)

module.exports = router