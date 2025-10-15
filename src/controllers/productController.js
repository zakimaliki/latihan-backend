import { selectAll, select, insert, countData, update, deleteData } from "../models/product.js"
import commoHelper from "../helper/common"
import cloudinary from "../middleware/cloudinary";


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
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const photo = result.secure_url;
            const { name, stock, price, description } = req.body
            const { rows: [count] } = await countData()
            const id = Number(count.count) + 1;
            const data = {
                id,
                name,
                stock,
                price,
                photo,
                description
            }
            const insertResult = await insert(data);
            commoHelper.response(res, insertResult.rows, 201, "Product Created");
        } catch (error) {
            console.error('Error in insertProduct:', error);
            res.status(500).json({
                status: 'error',
                statusCode: 500,
                message: 'Failed to create product',
                error: error.message
            });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            let photo;

            // Check if there's a file upload for photo update
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                photo = result.secure_url;
            } else {
                // If no new photo, keep the existing one or use a placeholder
                photo = req.body.photo || null;
            }

            const { name, stock, price, description } = req.body;

            const data = {
                id,
                name,
                stock,
                price,
                photo,
                description
            };

            const result = await update(data);
            commoHelper.response(res, result.rows, 200, "Product updated");
        } catch (error) {
            console.error('Error in updateProduct:', error);
            res.status(500).json({
                status: 'error',
                statusCode: 500,
                message: 'Failed to update product',
                error: error.message
            });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const result = await deleteData(id);
            commoHelper.response(res, result.rows, 200, "Product deleted");
        } catch (error) {
            console.error('Error in deleteProduct:', error);
            res.status(500).json({
                status: 'error',
                statusCode: 500,
                message: 'Failed to delete product',
                error: error.message
            });
        }
    },
}

export default productController