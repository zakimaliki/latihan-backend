import { selectAll, select, insert, countData, update, deleteData } from "../models/product.js"
const commoHelper = require("../helper/common") // Using CommonJS require

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const result = await selectAll()
            commoHelper.response(res, result.rows, 200, "Product Success")
        } catch (error) {
            res.send(error)
                ;
        }
    },
    getDetailProduct: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const result = await select(id)
            commoHelper.response(res, result.rows, 200, "Product Success")
        } catch (error) {
            res.send(error)
                ;
        }
    },
    insertProduct: async (req, res) => {
        const { name, stock, price } = req.body
        const { rows: [count] } = await countData()
        const id = Number(count.count) + 1;
        const data = {
            id,
            name,
            stock,
            price
        }
        insert(data).then(result => commoHelper.response(res, result.rows, 201, "Product Created"))
            .catch(error => res.send(error)

            )
    },
    updateProduct: (req, res) => {
        const id = Number(req.params.id)
        const { name, stock, price } = req.body

        const data = {
            id,
            name,
            stock,
            price
        }
        update(data).then(result => commoHelper.response(res, result.rows, 200, "product updated"))
            .catch(error => res.send(error)

            )
    },
    deleteProduct: (req, res) => {
        const id = Number(req.params.id)
        deleteData(id).then(result => commoHelper.response(res, result.rows, 200, "Product deleted"))
            .catch(error => res.send(error)

            )
    },
}

export default productController