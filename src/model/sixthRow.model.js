var mongoose = require('mongoose');
var productDetails = require('./productDetails.model');
const SixthRowSchema = new mongoose.Schema({
    title: String,
    description: String,
    productDetails: [productDetails],
    publish: Boolean

});
const sixth = mongoose.model('sixthrow', SixthRowSchema);
module.exports = sixth;