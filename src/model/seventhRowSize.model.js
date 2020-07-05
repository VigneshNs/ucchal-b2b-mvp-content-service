var mongoose = require('mongoose');
const SizeSchema = new mongoose.Schema({
    _id: String,
    sizeName: String,
    sku: String,
    productId: String,
    sizeQuantity: Number,
    sizePrice: Number,
    pricePrefix: Boolean,
    subtractStack: Number
});
module.exports = SizeSchema;