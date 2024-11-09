// productModel.js
const mongoose = require('mongoose');

// Định nghĩa Schema cho Product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: '' }, 
    createdAt: { type: Date, default: Date.now }
});

// Tạo Model từ Schema
const Product = mongoose.model('Product', productSchema);

// Xuất Model để sử dụng ở nơi khác trong ứng dụng
module.exports = Product;
