import express from 'express'
import productController from '../controllers/productController.js'
import { protect } from '../middleware/auth.js'
import upload from '../middleware/upload'

const router = express.Router()

router.get('/', productController.getAllProducts)
router.get('/:id', protect, productController.getDetailProduct)
router.post('/', upload.single('photo'), productController.insertProduct)
router.put('/:id', protect, productController.updateProduct)
router.delete('/:id', protect, productController.deleteProduct)

export default router