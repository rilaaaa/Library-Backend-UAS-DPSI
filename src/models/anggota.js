const pool = require("../config/database");

const create = (data) => {
    const { nim, nama, prodi, fakultas, id } = data;
    return pool.query(
        `INSERT INTO anggota(user_id,nim,nama,prodi,fakultas) VALUES ('${id}','${nim}','${nama}','${prodi}','${fakultas}')`
    );
};

const findNim = (nim) => {
    return new Promise((resolve, reject) =>
      pool.query(
        `SELECT * FROM anggota WHERE nim = '${nim}'`,
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

const selectAllAnggota = () => {
    return pool.query(`SELECT * FROM anggota`);
};

module.exports = {
    create,
    findNim,
    selectAllAnggota
};
