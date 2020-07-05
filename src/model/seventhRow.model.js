var mongoose = require('mongoose');
var productDetails = require('./productDetails.model');
const SeventhRowSchema = new mongoose.Schema({
    title: String,
    description: String,
    productDetails: [productDetails],
    publish: Boolean
});
const seventh = mongoose.model('seventh', SeventhRowSchema);
module.exports = seventh;