const {
    create,
    selectAllPeminjaman
} = require('../models/peminjaman')
const { v4: uuidv4 } = require('uuid')
const commonHelper = require("../helper/common");

const peminjamanController = {
    addPeminjaman: async (req, res) => {
        const {
            user_id,
            buku_id,
            tanggal_peminjaman,
            tanggal_pengembalian } = req.body
        const id = uuidv4()
        const data = {
            id,
            user_id,
            buku_id,
            tanggal_peminjaman,
            tanggal_pengembalian
        }
        create(data)
            .then((result) => {
                commonHelper.response(res, result.rows, 200, 'peminjaman is created')
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getAllPeminjaman: async (req, res) => {
        try {
            const result = await selectAllPeminjaman();
            commonHelper.response(res, result, 200, 'all peminjaman retrieved successfully');
        } catch (err) {
            console.log(err);
            commonHelper.response(res, null, 500, 'failed to retrieve peminjaman');
        }
    },
}

module.exports = peminjamanController