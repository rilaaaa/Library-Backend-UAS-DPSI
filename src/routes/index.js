const express = require('express')
const router = express.Router()
const userAdminRouter = require('../routes/userAdmin')
const userPetugasRouter = require('../routes/userPetugas')
const anggotaRouter = require('../routes/anggota')
const bukuRouter = require('../routes/buku')
const peminjamanRouter = require('../routes/peminjaman')
const pengembalianRouter = require('../routes/pengembalian')

router.get('/', (req, res) => {
    res.json({ message: 'welcome to library database' });
});

router.use('/admin',userAdminRouter)
router.use('/petugas',userPetugasRouter)
router.use('/anggota',anggotaRouter)
router.use('/buku',bukuRouter)
router.use('/peminjaman',peminjamanRouter)
router.use('/pengembalian',pengembalianRouter)

module.exports = router