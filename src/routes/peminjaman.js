const express = require('express')
const router = express.Router()
const peminjamanController = require('../controllers/peminjaman')
const { protect, validatePetugas } = require('../middleware/auth')

router
    .post('/addpeminjaman', protect, validatePetugas, peminjamanController.addPeminjaman)
    .get('/', protect, peminjamanController.getAllPeminjaman)

module.exports = router