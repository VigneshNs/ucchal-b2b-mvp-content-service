var bannerDetail = require('../model/banners.model');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');
const AWS = require('aws-sdk');

exports.createBanners = function (req, res) {
    var banner = new bannerDetail();
    banner.bannerDescription = req.body.bannerDescription;
    banner.bannerTitle = req.body.bannerTitle;
    banner.bannerSubTitle = req.body.bannerSubTitle;
    banner.buttonContent = req.body.buttonContent;
    banner.link = req.body.link;
    banner.position = req.body.position;
    banner.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": 'ads Not created'
            });
        } else {
            res.status(200).json(data);
        }
    });
}
exports.addBannerImage = function (req, file, res) {
    bannerDetail.findOne({
        '_id': req.params.id,
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);

        } else {
            data.bannerImageName = file.originalname;
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(data);
                }
            })
        }
    });
}

exports.addBannerName = function(req, res) {
    bannerDetail.findOne({'_id': req.params.id}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            findData.bannerImageName = req.body.bannerImageName;
            findData.save(function(err, data) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    bannerDetail.findOne({'_id': req.params.id}).select().exec(function(err, secondData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            secondData.bannerImageName = env.ImageServerPath + 'banners' + '/' + req.params.id + '/' + secondData.bannerImageName;
                            res.status(200).json(secondData);
                        }
                    })
                }
            })
        }
    })
}

exports.getBanner = function (req, res) {
    bannerDetail.find({}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var dataLength = data.length - 1;
            for (var i = 0; i <= dataLength; i++) {
                data[i].bannerImageName = env.ImageServerPath + 'banners' + '/' + data[i]._id + '/' + data[i].bannerImageName;
            }
            res.status(200).json(data);
        }
    });
}

exports.getBannerForUI = function (req, res) {
    bannerDetail.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var dataLength = data.length - 1;
            for (var i = 0; i <= dataLength; i++) {
                data[i].bannerImageName = env.ImageServerPath + 'banners' + '/' + data[i]._id + '/' + data[i].bannerImageName;
            }
            res.status(200).json(data);
        }
    });
}
exports.deleteBanner = function (req, res) {
    bannerDetail.find({
        '_id': req.params.id
    }, function (err, bannerDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            bannerDetail.findByIdAndRemove(req.params.id, function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    bannerDetail.find({}).select().sort({
                        position: 1
                    }).exec(function (err, bannerimage) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            var s3 = new AWS.S3();
                            s3.deleteObject({
                                Bucket: env.Bucket,
                                Key: 'images' + '/' + 'banners' + '/' + req.params.id + '/' + data.bannerImageName
                            }, function (err, data) {
                                if (err) {
                                    res.status(500).json(err);
                                } else {
                                    bannerDetail.find({}).select().sort({
                                        position: 1
                                    }).exec(function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: "Some error occurred while retrieving notes."
                                            });
                                        } else {
                                            var dataLength = data.length - 1;
                                            for (var i = 0; i <= dataLength; i++) {
                                                data[i].bannerImageName = env.ImageServerPath + 'banners' + '/' + data[i]._id + '/' + data[i].bannerImageName;
                                            }
                                            res.status(200).json(data);
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
exports.findSingleBanner = function (req, res) {
    bannerDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data1) {
        if (err) {
            res.status(500).json(err);
        } else {
            data1.bannerImageName = env.ImageServerPath + 'banners' + '/' + data1._id + '/' + data1.bannerImageName;
            res.status(200).json(data1);
        }
    })
}
exports.updateBanner = function (req, res) {
    bannerDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.bannerDescription = req.body.bannerDescription;
            data.bannerTitle = req.body.bannerTitle;
            data.buttonContent = req.body.buttonContent;
            data.bannerSubTitle = req.body.bannerSubTitle;
            data.link = req.body.link;
            data.position = req.body.position;
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    data.bannerImageName = env.ImageServerPath + 'banners' + '/' + data._id + '/' + data.bannerImageName;
                    res.status(200).json(data);
                }
            })
        }
    })
}


exports.updateBannerImage = function (req, file, res) {
    bannerDetail.findOne({
        '_id': req.params.id,
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (data.bannerImageName === file.originalname) {
                res.status(200).json(data);
            } else {
                var s3 = new AWS.S3();
                s3.deleteObject({
                    Bucket: env.Bucket,
                    Key: 'images' + '/' + 'banners' + '/' + req.params.id + '/' + data.bannerImageName
                }, function (err, data) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        bannerDetail.findOne({
                            '_id': req.params.id
                        }).select().exec(function (err, data1) {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                data1.bannerImageName = file.originalname;
                                data1.save(function (err, data) {
                                    if (err) {
                                        res.status(500).json(err);
                                    } else {
                                        data.bannerImageName = env.ImageServerPath + 'banners' + '/' + data._id + '/' + data.bannerImageName;
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
exports.updatePublishBanner = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    bannerDetail.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            bannerDetail.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    var dataLength = data.length - 1;
                    for (var i = 0; i <= dataLength; i++) {
                        data[i].bannerImageName = env.ImageServerPath + 'banners' + '/' + data[i]._id + '/' + data[i].bannerImageName;
                    }
                    res.status(200).json(data);
                }
            });
        }
    })
}

exports.UpdateUnPublishBanner = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    bannerDetail.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            bannerDetail.findOne({
                '_id': req.params.id
            }).select().exec(function (err, data1) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    bannerDetail.find({}).select().sort({
                        position: 1
                    }).exec(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            var dataLength = data.length - 1;
                            for (var i = 0; i <= dataLength; i++) {
                                data[i].bannerImageName = env.ImageServerPath + 'banners' + '/' + data[i]._id + '/' + data[i].bannerImageName;
                            }
                            res.status(200).json(data);
                        }
                    });
                }
            })
        }
    })
}