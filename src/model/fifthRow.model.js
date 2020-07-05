var mongoose = require('mongoose');
var productDetails = require('./productDetails.model');
const FifthRowSchema = new mongoose.Schema({
    title: String,
    description: String,
    productDetails: [productDetails],
    publish: Boolean
});
const fifth = mongoose.model('fifthRow', FifthRowSchema);
module.exports = fifth;