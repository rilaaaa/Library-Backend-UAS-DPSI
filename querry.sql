CREATE TABLE user_admin(
    user_id VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    role VARCHAR NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE user_petugas(
    user_id VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    role VARCHAR NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE anggota(
    user_id VARCHAR NOT NULL,
    nim VARCHAR NOT NULL,
    nama VARCHAR NOT NULL,
    prodi VARCHAR NULL,
    fakultas VARCHAR NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE buku(
    buku_id VARCHAR NOT NULL,
    isbn VARCHAR NOT NULL,
    judul VARCHAR NOT NULL,
    pengarang VARCHAR NULL,
    penerbit VARCHAR NOT NULL,
    kategori VARCHAR NOT NULL,
    tahun INTEGER NOT NULL,
    jumlah_buku INTEGER NOT NULL,
    PRIMARY KEY (buku_id)
);

CREATE TABLE peminjaman (
    peminjaman_id VARCHAR NOT NULL,
    user_id VARCHAR NULL,
    buku_id VARCHAR NULL,
    tanggal_peminjaman DATE NULL,
    tanggal_pengembalian DATE NOT NULL,
    PRIMARY KEY (peminjaman_id),
    FOREIGN KEY (user_id) REFERENCES anggota(user_id) ON DELETE CASCADE,
    FOREIGN KEY (buku_id) REFERENCES buku(buku_id) ON DELETE CASCADE
);

CREATE TABLE pengembalian (
    pengembalian_id VARCHAR NOT NULL,
    peminjaman_id VARCHAR NULL,
    tanggal_pengembalian DATE NULL,
    PRIMARY KEY (pengembalian_id),
    FOREIGN KEY (peminjaman_id) REFERENCES peminjaman(peminjaman_id) ON DELETE CASCADE,
);



