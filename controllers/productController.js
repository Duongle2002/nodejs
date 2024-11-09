// controllers/productController.js
const Product = require('../models/product');

// Hàm lấy tất cả sản phẩm
async function getAllProducts(req, res) {
    try {
        const products = await Product.find(); // Lấy tất cả tài liệu trong collection Product
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy sản phẩm" });
    }
}

// Hàm lấy sản phẩm theo ID
async function getProductById(req, res) {
    const { id } = req.params; // Lấy ID từ tham số của URL
    try {
        const product = await Product.findById(id); // Tìm sản phẩm theo ID
        if (!product) {
            return res.status(404).json({ message: "Sản phẩm không tìm thấy" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy sản phẩm" });
    }
}

// Hàm hiển thị sản phẩm
async function viewProducts(req, res) {
    try {
        const products = await Product.find(); // Lấy tất cả sản phẩm
        res.render('products', { products }); // Render file products.ejs và truyền dữ liệu
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy sản phẩm" });
    }
}

module.exports = { getAllProducts, getProductById, viewProducts };
