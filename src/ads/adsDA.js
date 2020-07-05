var adsDetail = require('../model/ads.model');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');
var fs = require('fs');
const AWS = require('aws-sdk');

exports.createAds = function (req, res) {
    var ads = new adsDetail();
    ads.adsDescription = req.body.adsDescription;
    ads.adsTitle = req.body.adsTitle;
    ads.link = req.body.link;
    ads.position = req.body.position;
    ads.buttonContent = req.body.buttonContent;
    ads.save(function (err, ads) {
        if (err) {
            res.status(500).send({
                "message": 'ads Not created'
            });
        } else {
            res.status(200).json(ads);
        }
    });
}
exports.addAdsImage = function (req, file, res) {
    adsDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.adsImageName = file.originalname;
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

exports.addAdsName = function(req, res) {
    adsDetail.findOne({'_id': req.params.id}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            findData.adsImageName = req.body.adsImageName;
            findData.save(function(err, data) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    adsDetail.findOne({'_id': req.params.id}).select().exec(function(err, secondData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            secondData.adsImageName = env.ImageServerPath + 'smallbanner' + '/' + req.params.id + '/' + secondData.adsImageName;
                            res.status(200).json(secondData);
                        }
                    })
                }
            })
        }
    })
}
exports.deleteAds = function (req, res) {
    adsDetail.find({
        '_id': req.params.id
    }, function (err, adsDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            adsDetail.findByIdAndRemove(req.params.id, function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    adsDetail.find({}).select().sort({
                        position: 1
                    }).exec(function (err, adsImages) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            var s3 = new AWS.S3();
                            s3.deleteObject({
                                Bucket: env.Bucket,
                                Key: 'images' + '/' + 'smallbanner' + '/' + req.params.id + '/' + data.adsImageName
                            }, function (err, data) {
                                if (err) {
                                    res.status(500).json(err);
                                } else {
                                    adsDetail.find({}).select().sort({
                                        position: 1
                                    }).exec(function (err, adsImages) {
                                        if (err) {
                                            res.status(500).send({
                                                message: "Some error occurred while retrieving notes."
                                            });
                                        } else {
                                            var adsLength = adsImages.length - 1;
                                            for (var i = 0; i <= adsLength; i++) {
                                                adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
                                            }
                                            res.status(200).json(adsImages);
                                        }
                                    });
                                }
                            })
                        }
                    });
                }
            });
        }
    });
}
exports.getAds = function (req, res) {
    adsDetail.find({}).select().sort({
        position: 1
    }).exec(function (err, adsImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var adsLength = adsImages.length - 1;
            for (var i = 0; i <= adsLength; i++) {
                adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            }
            res.status(200).json(adsImages);
        }
    });
}

exports.getPublishedAds = function (req, res) {
    adsDetail.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, adsImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var adsLength = adsImages.length - 1;
            for (var i = 0; i <= adsLength; i++) {
                adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            }
            res.status(200).json(adsImages);
        }
    });
}

exports.findSingleADS = function (req, res) {
    adsDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data1) {
        if (err) {
            res.status(500).json(err);
        } else {
            data1.adsImageName = env.ImageServerPath + 'smallbanner' + '/' + data1._id + '/' + data1.adsImageName;
            res.status(200).json(data1);
        }
    })
}
exports.updateADS = function (req, res) {
    adsDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.adsDescription = req.body.adsDescription;
            data.adsTitle = req.body.adsTitle;
            data.link = req.body.link;
            data.position = req.body.position;
            data.buttonContent = req.body.buttonContent;
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    data.adsImageName = env.ImageServerPath + 'smallbanner' + '/' + data._id + '/' + data.adsImageName;
                    res.status(200).json(data);
                }
            })
        }
    })
}

exports.updateADSImage = function (req, file, res) {
    adsDetail.findOne({
        '_id': req.params.id,
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (data.adsImageName === file.originalname) {
                res.status(200).json(data);
            } else {
                var s3 = new AWS.S3();
                s3.deleteObject({
                    Bucket: env.Bucket,
                    Key: 'images' + '/' + 'smallbanner' + '/' + req.params.id + '/' + data.adsImageName
                }, function (err, data) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        adsDetail.findOne({
                            '_id': req.params.id
                        }).select().exec(function (err, data1) {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                data1.adsImageName = file.originalname;
                                data1.save(function (err, data) {
                                    if (err) {
                                        res.status(500).json(err);
                                    } else {
                                        data.adsImageName = env.ImageServerPath + 'smallbanner' + '/' + data._id + '/' + data.adsImageName;
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

exports.updatePublishADS = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    adsDetail.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            adsDetail.find({}).select().sort({
                position: 1
            }).exec(function (err, adsImages) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    var adsLength = adsImages.length - 1;
                    for (var i = 0; i <= adsLength; i++) {
                        adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
                    }
                    res.status(200).json(adsImages);
                }
            });
        }
    })
}

exports.UpdateUnPublishADS = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    adsDetail.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            adsDetail.find({}).select().sort({
                position: 1
            }).exec(function (err, adsImages) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    var adsLength = adsImages.length - 1;
                    for (var i = 0; i <= adsLength; i++) {
                        adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
                    }
                    res.status(200).json(adsImages);
                }
            });
        }
    })
}