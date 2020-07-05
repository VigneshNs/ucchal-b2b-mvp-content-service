var mongoose = require('mongoose');

const ADSchema = new mongoose.Schema({
    position: Number,
    adsImageName: String,
    adsDescription: String,
    adsTitle: String,
    link: String,
    publish: Boolean,
    buttonContent: String
});
const ADs = mongoose.model('ads', ADSchema);
module.exports = ADs;