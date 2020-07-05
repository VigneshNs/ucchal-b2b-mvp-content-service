var adsDA = require('./adsDA');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');


exports.createAds = function (req, res) {
    try {
        adsDA.createAds(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.addAdsImage = function (req, res) {
    try {
        const file = req.files
        file.map((item) => {
            const params = {
              Bucket: env.Bucket + '/' + 'images' + '/' + 'ads'+ '/' + req.params.id,  // create a folder and save the image
              Key: item.originalname,
              Body: item.buffer,    
        };
        s3.upload(params, (err, data) => {
            if (err) {
              console.log(err);
            } else {
                adsDA.addAdsImage(req,item,res);
            }
        });
    }) 
    } catch (error) {
        console.log(error);
    }
}

exports.addAdsName = function (req, res) {
    try {
        adsDA.addAdsName(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteAds = function (req, res) {
    try {
        adsDA.deleteAds(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getAds = function (req, res) {
    try {
        adsDA.getAds(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getPublishedAds = function (req, res) {
    try {
        adsDA.getPublishedAds(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.findSingleADS = function (req, res) {
    try {
        adsDA.findSingleADS(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.updateADS = function (req, res) {
    try {
        adsDA.updateADS(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateADSImage = function(req, res) {
    try{
        const file = req.files
        file.map((item) => {
            const params = {
              Bucket: env.Bucket + '/' + 'images' + '/' + 'ads'+ '/' + req.params.id,  // create a folder and save the image
              Key: item.originalname,
              Body: item.buffer,    
        };
       
        s3.upload(params, (err, data) => {
            if (err) {
              console.log(err);
            } else {
                adsDA.updateADSImage(req,item,res);
            }
        });
    }) 
    } catch (error) {
        console.log(error);
    }
}


exports.updatePublishADS = function (req, res) {
    try {
        adsDA.updatePublishADS(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.UpdateUnPublishADS = function (req, res) {
    try {
        adsDA.UpdateUnPublishADS(req, res);
    } catch (error) {
        console.log(error);
    }
}

