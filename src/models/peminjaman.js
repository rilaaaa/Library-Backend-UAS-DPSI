const pool = require("../config/database");
const { DateTime } = require('luxon');

const create = (data) => {
    const { user_id, buku_id, tanggal_peminjaman, tanggal_pengembalian, id } = data;
    return pool.query(
        `INSERT INTO peminjaman(peminjaman_id,user_id,buku_id,tanggal_peminjaman,tanggal_pengembalian)
         VALUES ('${id}','${user_id}','${buku_id}','${tanggal_peminjaman}','${tanggal_pengembalian}')`
    );
};


const selectAllPeminjaman = () => {
    return pool.query(
        `SELECT peminjaman.*, anggota.nama AS nama_anggota, buku.judul AS judul_buku
        FROM peminjaman
        JOIN anggota ON peminjaman.user_id = anggota.user_id
        JOIN buku ON peminjaman.buku_id = buku.buku_id`
    ).then(res => {
        return res.rows.map(row => {
            row.tanggal_peminjaman = DateTime.fromJSDate(row.tanggal_peminjaman).setZone('Asia/Jakarta').toISODate();
            row.tanggal_pengembalian = DateTime.fromJSDate(row.tanggal_pengembalian).setZone('Asia/Jakarta').toISODate();
            return row;
        });
    });
};

module.exports = {
    create,
    selectAllPeminjaman
};
