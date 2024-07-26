const {
    findIsbn,
    create,
    selectAllBuku
} = require('../models/buku')
const { v4: uuidv4 } = require('uuid')
const commonHelper = require("../helper/common");

const bukuController = {
    addBuku: async (req,res) => {
        const { 
            isbn, 
            judul, 
            pengarang, 
            penerbit, 
            kategori, 
            tahun, 
            jumlah_buku } = req.body
        const { rowCount } = await findIsbn(isbn)
        if (rowCount) {
            return res.json({ message: 'ISBN is already taken' })
        }
        const id = uuidv4()
        const data = {
            id,
            isbn, 
            judul, 
            pengarang, 
            penerbit, 
            kategori, 
            tahun, 
            jumlah_buku 
        }
        create(data)
            .then((result) => {
                commonHelper.response(res, result.rows, 200, 'succes input buku')
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getAllBuku: async (req, res) => {
        try {
            const result = await selectAllBuku();
            commonHelper.response(res, result.rows, 200, 'all buku retrieved successfully');
        } catch (err) {
            console.log(err);
            commonHelper.response(res, null, 500, 'failed to retrieve buku');
        }
    },
}

module.exports = bukuController;