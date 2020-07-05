var headerDetail = require('../model/header.model');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');
const AWS = require('aws-sdk');

exports.createHeader = function (req, res) {
    headerDetail.find({}).select().exec(function (err, headerData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var header = new headerDetail();
            header.logoImageName = req.body.logoImageName;
            if (headerData.length === 0) {
                header.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        headerDetail.find({}).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                data[0].logoImageName = env.ImageServerPath + 'header' + '/' + data[0].logoImageName;
                                res.status(200).json(data);
                            }
                        });
                    }
                })

            } else {
                if (headerData[0].logoImageName === req.body.logoImageName) {
                    headerDetail.find({}).select().exec(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            data[0].logoImageName = env.ImageServerPath + 'header' + '/' + data[0].logoImageName;
                            res.status(200).json(data);
                        }
                    });
                } else {
                    var s3 = new AWS.S3();
                    s3.deleteObject({
                        Bucket: env.Bucket,
                        Key: 'images' + '/' + 'header' + '/' + headerData[0].logoImageName
                    }, function (err, data) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            headerDetail.find({}).select().exec(function (err, data) {
                                if (err) {
                                    res.status(500).json(err);
                                } else {
                                    data[0].logoImageName = req.body.logoImageName;
                                    data[0].save(function (err, data) {
                                        if (err) {
                                            res.status(500).json(err);
                                        } else {
                                            headerDetail.find({}).select().exec(function (err, data) {
                                                if (err) {
                                                    res.status(500).send({
                                                        message: "Some error occurred while retrieving notes."
                                                    });
                                                } else {
                                                    data[0].logoImageName = env.ImageServerPath + 'header' + '/' + data[0].logoImageName;
                                                    res.status(200).json(data);
                                                }
                                            });
                                        }
                                    })
                                }
                            })
                        }
                    })
                }

            }
        }
    });
}

exports.getHeaderImage = function (req, res) {
    headerDetail.find({}).sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (data.length === 0) {
                res.status(200).json(data);
            } else {
                data[0].logoImageName = env.ImageServerPath + 'header' + '/' + data[0].logoImageName;
                res.status(200).json(data);
            }

        }
    })
}