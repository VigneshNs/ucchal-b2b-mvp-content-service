var footerDA = require('./footerDA');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');

exports.createFooter = function (req, res) {
    try {
        footerDA.createFooter(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.createLogoImage = function (req, res) {
    try {
        const file = req.files
        file.map((item) => {
            const params = {
              Bucket: env.Bucket + '/' + 'images' + '/' + 'footer'+ '/' + req.params.id,  // create a folder and save the image
              Key: item.originalname,
              Body: item.buffer,    
        };
        s3.upload(params, (err, data) => {
            if (err) {
              console.log(err);
            } else {
                footerDA.createLogoImage(req,item,res);
            }
        });
    }) 
    } catch (error) {
        console.log(error);
    }
}
exports.getFooterDetails = function (req, res) {
    try {
        footerDA.getFooterDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.updateFooterDetails = function (req, res) {
    try {
        footerDA.updateFooterDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.saveFooterImageName = function (req, res) {
    try {
        footerDA.saveFooterImageName(req, res);

    } catch (error) {
        console.log(error);
    }
}
