const {
    create,
    selectAllPengembalian
} = require('../models/pengembalian')
const { v4: uuidv4 } = require('uuid')
const commonHelper = require("../helper/common");

const pengembalianController = {
    addPengembalian: async (req, res) => {
        const {
            peminjaman_id,
            tanggal_pengembalian,} = req.body
        const id = uuidv4()
        const data = {
            id,
            peminjaman_id,
            tanggal_pengembalian,
        }
        create(data)
            .then((result) => {
                commonHelper.response(res, result.rows, 200, 'pengembalian is created')
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getAllPengembalian: async (req, res) => {
        try {
            const result = await selectAllPengembalian();
            commonHelper.response(res, result, 200, 'all pengembalian retrieved successfully');
        } catch (err) {
            console.log(err);
            commonHelper.response(res, null, 500, 'failed to retrieve pengembalian');
        }
    },
}

module.exports = pengembalianController