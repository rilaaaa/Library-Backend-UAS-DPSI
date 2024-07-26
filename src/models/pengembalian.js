const pool = require("../config/database");
const { DateTime } = require('luxon');

const create = (data) => {
    const { peminjaman_id, tanggal_pengembalian, id } = data;
    return pool.query(
        `INSERT INTO pengembalian(pengembalian_id,peminjaman_id,tanggal_pengembalian)
         VALUES ('${id}','${peminjaman_id}','${tanggal_pengembalian}')`
    );
};


const selectAllPengembalian = () => {
    return pool.query(
        `SELECT pengembalian.*, peminjaman.tanggal_peminjaman
        FROM pengembalian
        JOIN peminjaman ON pengembalian.peminjaman_id = peminjaman.peminjaman_id`
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
    selectAllPengembalian
};
