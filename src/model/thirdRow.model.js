var mongoose = require('mongoose');
var productDetails = require('./productDetails.model');
const ThirdRowSchema = new mongoose.Schema({
    title: String,
    description: String,
    productDetails: [productDetails],
    publish: Boolean
});
const third = mongoose.model('thirdRow', ThirdRowSchema);
module.exports = third;