var headerDA = require('./headerDA');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');

/* exports.createHeader = function (req, res) {
    try {
        const PATH = appSetiing.headerUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                headerDA.createHeader(req, file, res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });

        let upload = multer({
            storage: storage
        }).array('uploads[]', 20); //only 20 images can be uploaded
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
        });

    } catch (error) {
        console.log(error);
    }
} */

exports.createHeader = function (req, res) {
    try {
        headerDA.createHeader(req, res);
    } catch (error) {
        console.log(error);
    }
}



exports.getHeaderImage = function (req, res) {
    try {
        headerDA.getHeaderImage(req, res);
    } catch (error) {
        console.log(error);
    }
}