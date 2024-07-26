const pool = require("../config/database");

const create = (data) => {
    const { isbn, judul, pengarang, penerbit, kategori, tahun, jumlah_buku, id } = data;
    return pool.query(
        `INSERT INTO buku(buku_id,isbn, judul, pengarang, penerbit, kategori, tahun, jumlah_buku)
         VALUES ('${id}','${isbn}','${judul}','${pengarang}','${penerbit}','${kategori}',${tahun},${jumlah_buku})`
    );
};

const findIsbn = (isbn) => {
    return new Promise((resolve, reject) =>
        pool.query(
            `SELECT * FROM buku WHERE isbn = '${isbn}'`,
            (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        )
    );
};

const selectAllBuku = () => {
    return pool.query(`SELECT * FROM buku`);
};

module.exports = {
    create,
    findIsbn,
    selectAllBuku
};
