var mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    position: Number,
    bannerImageName: String,
    bannerDescription: String,
    bannerTitle: String,
    bannerSubTitle: String,
    buttonContent: String,
    link: String,
    publish: Boolean
});
const Banners = mongoose.model('banners', BannerSchema);
module.exports = Banners;