var homepageVideoDA = require('./homepagevideoDA');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');



exports.createhomepageVideo = function (req, res) {
    try {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const today = month + '/' + day + '/' + year ;

        homepageVideoDA.createhomepageVideo(req, res,today);
    } catch (error) {
        console.log(error);
    }
}

exports.deletehomepageVideo = function (req, res) {
    try {
        homepageVideoDA.deletehomepageVideo(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.gethomepageVideo = function (req, res) {
    try {
        homepageVideoDA.gethomepageVideo(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.changesVideoStatus = function (req, res) {
    try {
        homepageVideoDA.changesVideoStatus(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updatehomepageVideo = function (req, res) {
    try {
        homepageVideoDA.updatehomepageVideo(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getPublishedhomepageVideo = function (req, res) {
    try {
        homepageVideoDA.getPublishedhomepageVideo(req, res);
    } catch (error) {
        console.log(error);
    }
}

// exports.updateVideo = function (req, res) {
//     try {
//         adsDA.getPublishedAds(req, res);
//     } catch (error) {
//         console.log(error);
//     }
// }