var mongoose = require('mongoose');
const ProductDetailsSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    productImageName: String,
    material: String,
    productId: String,
    sku: String,
    sizeVariant: [String]
});
module.exports = ProductDetailsSchema;