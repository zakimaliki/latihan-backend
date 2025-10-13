// Example file showing mixing ES modules and CommonJS with Babel

// ES Module imports
import express from 'express'
import { selectAll } from '../models/product.js'

// CommonJS requires
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// You can use both syntaxes in the same file!
const mixedController = {
    example: async (req, res) => {
        // Using ES module imported function
        const products = await selectAll()

        // Using CommonJS required function
        const hash = bcrypt.hashSync('password', 10)

        res.json({
            message: 'Mixed ES modules and CommonJS working!',
            products: products.rows,
            hashedPassword: hash
        })
    }
}

// You can use either export syntax
module.exports = mixedController
// or
// export default mixedController
