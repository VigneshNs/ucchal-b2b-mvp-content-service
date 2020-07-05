var footerDetail = require('../model/footer.model');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');
const AWS = require('aws-sdk');

exports.createFooter = function (req, res) {
    footerDetail.find({}).select().exec(function (err, footerData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var footer = new footerDetail(req.body);
            if (footerData.length === 0) {
                footer.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        footerDetail.find({}).select().exec(function (err, footerData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(footerData);
                            }
                        })
                    }
                })
            } else {
                footerData[0].address = req.body.address;
                footerData[0].instagramLink = req.body.instagramLink;
                footerData[0].facebookLink = req.body.facebookLink;
                footerData[0].pintrestLink = req.body.pintrestLink;
                footerData[0].youtubeLink = req.body.youtubeLink;
                footerData[0].googlePlusLink = req.body.googlePlusLink;
                footerData[0].twitterLink = req.body.twitterLink;
                footerData[0].map = req.body.map;
                footerData[0].contactNo = req.body.contactNo;
                footerData[0].alternativeContactNo = req.body.alternativeContactNo;
                footerData[0].mailId = req.body.mailId;
                footerData[0].aboutUsPreview = req.body.aboutUsPreview;
                footerData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        footerDetail.find({}).select().exec(function (err, footerData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(footerData);
                            }
                        })
                    }
                })
            }
        }
    });
}


exports.createLogoImage = function (req, file, res) {
    footerDetail.findOne({
        '_id': req.params.id,
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (data.logoImageName === file.originalname) {
                res.status(200).json(data);
            } else {
                var s3 = new AWS.S3();
                s3.deleteObject({
                    Bucket: env.Bucket,
                    Key: 'images' + '/' + 'footer' + '/' + req.params.id + '/' + data.logoImageName
                }, function (err, data) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        footerDetail.findOne({
                            '_id': req.params.id
                        }).select().exec(function (err, data) {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                data.logoImageName = file.originalname;
                                data.save(function (err, data) {
                                    if (err) {
                                        res.status(500).json(err);
                                    } else {
                                        res.status(200).json(data);
                                    }
                                })
                            }
                        })
                    }
                })
            }

        }
    });
}

exports.getFooterDetails = function (req, res) {
    footerDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if (data.length === 0) {
                res.status(200).json(data)
            } else {
                data[0].logoImageName = env.ImageServerPath + 'footer' + '/' + data[0]._id + '/' + data[0].logoImageName;
                res.status(200).json(data);
            }

        }
    })
}

exports.updateFooterDetails = function (req, res) {
    footerDetail.find({
        '_id': req.params.id,
    }, function (err, footerData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            footerData[0].address = req.body.address;
            footerData[0].instagramLink = req.body.instagramLink;
            footerData[0].facebookLink = req.body.facebookLink;
            footerData[0].pintrestLink = req.body.pintrestLink;
            footerData[0].googlePlusLink = req.body.googlePlusLink;
            footerData[0].youtubeLink = req.body.youtubeLink;
            footerData[0].twitterLink = req.body.twitterLink;
            footerData[0].map = req.body.map;
            footerData[0].contactNo = req.body.contactNo;
            footerData[0].alternativeContactNo = req.body.alternativeContactNo;
            footerData[0].mailId = req.body.mailId;
            footerData[0].aboutUsPreview = req.body.aboutUsPreview;
            footerData[0].save(function (err, footerDa) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    res.status(200).json(footerDa);
                }
            })
        }
    });
}

exports.saveFooterImageName = function(req, res) {
    footerDetail.findOne({'_id': req.params.id}).select().exec(function(err, footer) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (footer.logoImageName === undefined || footer.logoImageName === null) {
                footer.logoImageName = req.body.logoImageName;
                footer.save(function(err, saveData) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(saveData);
                    }
                })
            } else {
                if (footer.logoImageName === req.body.logoImageName) {
                  res.status(200).json(footer);
                } else {
                    var s3 = new AWS.S3();
                    s3.deleteObject({
                        Bucket: env.Bucket,
                        Key: 'images' + '/' + 'footer' + '/' + req.params.id + '/' + footer.logoImageName
                    }, function(err, deleteData) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            footer.logoImageName = req.body.logoImageName;
                            footer.save(function(err, updateData) {
                                if (err) {
                                    res.status(500).json(err);
                                } else {
                                    res.status(200).json(updateData);
                                }
                            })
                        }
                    })
                }
            }
        }
    })
}