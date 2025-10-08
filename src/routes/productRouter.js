const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const { protect } = require('../middleware/auth')

router.get('/', protect, productController.getAllProducts)
router.get('/:id', productController.getDetailProduct)
router.post('/', productController.insertProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router