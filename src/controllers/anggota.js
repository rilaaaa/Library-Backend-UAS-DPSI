const {
    findNim,
    create,
    selectAllAnggota
} = require('../models/anggota')
const { v4: uuidv4 } = require('uuid')
const commonHelper = require("../helper/common");

const anggotaController = {
    addAnggota: async (req, res) => {
        const { 
            nim, 
            nama, 
            prodi, 
            fakultas } = req.body
        const { rowCount } = await findNim(nim)
        if (rowCount) {
            return res.json({ message: 'nim is already taken' })
        }
        const id = uuidv4()
        const data = {
            id,
            nim,
            nama,
            prodi,
            fakultas,
        }
        create(data)
            .then((result) => {
                commonHelper.response(res, result.rows, 200, 'anggota is created')
            })
            .catch((err) => {
                console.log(err)
            })
    },

    getAllAnggota: async (req, res) => {
        try {
            const result = await selectAllAnggota();
            commonHelper.response(res, result.rows, 200, 'all anggota retrieved successfully');
        } catch (err) {
            console.log(err);
            commonHelper.response(res, null, 500, 'failed to retrieve anggota');
        }
    },
}

module.exports = anggotaController;