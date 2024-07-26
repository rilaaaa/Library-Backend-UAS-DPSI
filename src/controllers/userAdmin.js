const {
    findUsername,
    create
} = require('../models/userAdmin')
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const authHelper = require('../helper/auth')
const commonHelper = require('../helper/common')

const userAdminControllers = {
    registerUser: async (req, res) => {
        const { username, role, password } = req.body
        const { rowCount } = await findUsername(username)
        if (rowCount) {
            return res.json({ message: 'username is already taken' })
        }
        const passwordHash = bcrypt.hashSync(password)
        const id = uuidv4()
        const data = {
            id,
            username,
            role,
            passwordHash,
        }
        create(data)
            .then((result) => {
                commonHelper.response(res, result.rows, 200, 'admin is created')
            })
            .catch((err) => {
                console.log(err)
            })
    },

    loginUser: async (req, res) => {
        const { username, password } = req.body
        const {
            rows: [user]
        } = await findUsername(username)
        if (!user) {
            return res.json({ message: 'username is incorrect' })
        }
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            return res.json({ message: 'passowrd is incorrect' })
        }
        delete user.password
        const payload = {
            role: user.role,
        }
        user.token = authHelper.generateToken(payload)
        user.refreshToken = authHelper.refreshToken(payload)
        commonHelper.response(res, user, 201, 'login is successful')
    },

    refreshToken: (req, res) => {
        const refreshToken = req.body.refreshToken
        const decoded = jwt.verify(refreshToken, process.env.SECRETE_KEY_JWT)
        const payload = {
            username: decoded.username
        }
        const result = {
            token: authHelper.generateToken(payload),
            refershToken: authHelper.refreshToken(payload)
        }
        commonHelper.response(res, result, 200, 'token is already generate')
    },
}

module.exports = userAdminControllers