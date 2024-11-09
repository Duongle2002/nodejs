// routes/productRoutes.js
const express = require('express');
const { getAllProducts, getProductById, viewProducts } = require('../controllers/productController');
const router = express.Router();

// Route API để lấy tất cả sản phẩm
router.get('/products', getAllProducts); 
// Route API để lấy sản phẩm theo ID
router.get('/products/:id', getProductById); 
// Route để hiển thị sản phẩm
router.get('/view-products', viewProducts); 

module.exports = router;
