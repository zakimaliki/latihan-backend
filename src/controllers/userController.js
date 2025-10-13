const { v4: uuidv4 } = require('uuid') // CommonJS
import bcrypt from 'bcryptjs' // ES Module
const createError = require('http-errors') // CommonJS
import jwt from 'jsonwebtoken' // ES Module
const { findEmail, create } = require('../models/users') // CommonJS
const commonHelper = require('../helper/common') // CommonJS
const authHelper = require('../helper/auth') // CommonJS

const UserController = {
    register: async (req, res, next) => {
        try {
            const { email, password, fullname } = req.body;
            const { rowCount } = await findEmail(email)
            const salt = bcrypt.genSaltSync(10);
            const passwordHash = bcrypt.hashSync(password);
            const id = uuidv4()
            if (rowCount) {
                return next(createError(403, "Email is already used"))
            }
            const data = {
                id: uuidv4(),
                email,
                passwordHash,
                fullname,
                role: 'user'
            }
            create(data)
                .then(
                    result => commonHelper.response(res, result.rows, 201, "Category created")
                )
                .catch(err => res.send(err)
                )
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body
            const { rows: [user] } = await findEmail(email)
            if (!user) {
                return commonHelper.response(res, null, 403, 'Email is invalid')
            }
            const isValidPassword = bcrypt.compareSync(password, user.password)
            console.log(isValidPassword);

            if (!isValidPassword) {
                return commonHelper.response(res, null, 403, 'Password is invalid')
            }
            delete user.password
            const payload = {
                email: user.email,
                role: user.role
            }
            user.token = authHelper.generateToken(payload)
            commonHelper.response(res, user, 201, 'login is successful')
        } catch (error) {
            console.log(error);
        }
    },
}

export default UserController 