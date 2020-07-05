var mongoose = require('mongoose');
var productDetails = require('./productDetails.model');
const SecondRowSchema = new mongoose.Schema({
    title: String,
    description: String,
    productDetails: [productDetails],
    publish: Boolean
});
const second = mongoose.model('secondRow', SecondRowSchema);
module.exports = second;