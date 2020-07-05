var bannerDA = require('./bannersDA');

var s3 = require('../config/s3.config');
var env = require('../config/s3.env');


exports.createBanners = function (req, res) {
    try {
        bannerDA.createBanners(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.addBannerImage = function (req, res) {
    try {
        const file = req.files
        file.map((item) => {
            const params = {
                Bucket: env.Bucket + '/' + 'images' + '/' + 'banners' + '/' + req.params.id, // create a folder and save the image
                Key: item.originalname,
                Body: item.buffer,
            };
            s3.upload(params, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    bannerDA.addBannerImage(req, item, res);
                }
            });
        })
    } catch (error) {
        console.log(error);
    }
}

exports.addBannerName = function (req, res) {
    try {
        bannerDA.addBannerName(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getBanner = function (req, res) {
    try {
        bannerDA.getBanner(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getBannerForUI = function (req, res) {
    try {
        bannerDA.getBannerForUI(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteBanner = function (req, res) {
    try {
        bannerDA.deleteBanner(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.findSingleBanner = function (req, res) {
    try {
        bannerDA.findSingleBanner(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.updateBanner = function (req, res) {
    try {
        bannerDA.updateBanner(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateBannerImage = function (req, res) {
    try {
        const file = req.files
        file.map((item) => {
            const params = {
                Bucket: env.Bucket + '/' + 'images' + '/' + 'banners' + '/' + req.params.id, // create a folder and save the image
                Key: item.originalname,
                Body: item.buffer,
            };
            s3.upload(params, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    bannerDA.updateBannerImage(req, item, res);
                }
            });
        })
    } catch (error) {
        console.log(error);
    }
}

exports.updatePublishBanner = function (req, res) {
    try {
        bannerDA.updatePublishBanner(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.UpdateUnPublishBanner = function (req, res) {
    try {
        bannerDA.UpdateUnPublishBanner(req, res);
    } catch (error) {
        console.log(error);
    }
}
