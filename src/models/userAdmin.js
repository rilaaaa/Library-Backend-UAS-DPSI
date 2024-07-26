const pool = require("../config/database");

const create = (data) => {
    const { username,role, passwordHash, id } = data;
    return pool.query(
        `INSERT INTO user_admin(user_id,username,role,password) VALUES('${id}','${username}','${role}','${passwordHash}')`
    );
};

const findUsername = (username) => {
    return new Promise((resolve, reject) =>
        pool.query(
            `SELECT * FROM user_admin WHERE username = '${username}'`,
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

module.exports = {
    findUsername,
    create
};

