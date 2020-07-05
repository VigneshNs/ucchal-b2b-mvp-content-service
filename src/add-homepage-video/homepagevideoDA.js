var homePageVideoDetail = require('../model/homepagevideo.model');
var s3 = require('../config/s3.config');
var env = require('../config/s3.env');
var fs = require('fs');
const AWS = require('aws-sdk');

exports.createhomepageVideo = function (req, res,today) {
    var homePageVideo = new homePageVideoDetail();
    homePageVideo.videoTitle = req.body.videoTitle;
    homePageVideo.videoLink = req.body.videoLink;
    homePageVideo.addedDate = today;
    
    homePageVideo.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "message": 'ads Not created'
            });
        } else {
            homePageVideoDetail.find({}).select().exec(function (err, videoData) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while retreiving data'
                    })
                } else {
                    res.status(200).json(videoData);
                }
            })
        }
    });
}

exports.deletehomepageVideo = function (req, res) {
    homePageVideoDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            homePageVideoDetail.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {

                    res.status(200).json(data);
                }
            });


        }
    });
}
exports.changesVideoStatus = function(req, res) {

    homePageVideoDetail.updateMany({},{$set: { "publish": "false" }}).exec(function(err, data){
        if(err) {
             res.status(500).json(err);
         }else{
            homePageVideoDetail.updateOne({'_id': req.params.id },{$set: { "publish": req.body.publish }}).exec(function(err, finalData){
                if(err) {
                    res.status(500).json(err);
                  }
                 else{
                  
            homePageVideoDetail.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {

                    res.status(200).json(data);
                }
            });
                }
     })

    }
  })
}

    // homePageVideoDetail.findOne({'_id': req.params.id}).select().exec(function(err, data) {
    //     if(err) {
    //         res.status(500).json(err);
    //     } else {
    //         data.publish = req.body.publish;
    //         data.save(function(err, data) {
    //             if(err) {
    //                 res.status(500).json(err);
    //             } else {
    //                 homePageVideoDetail.find({}).sort({'date': -1}).exec(function(err, findData) {
    //                     if(err) {
    //                         res.status(500).json(err);
    //                     } else {
    //                         res.status(200).json(findData);
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })


exports.gethomepageVideo = function (req, res) {
    homePageVideoDetail.find({}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            // var adsLength = adsImages.length - 1;
            // for (var i = 0; i <= adsLength; i++) {
            //     adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            // }
            res.status(200).json(data);
        }
    });
}

exports.getPublishedhomepageVideo = function (req, res) {
    homePageVideoDetail.find({'publish': true}).select().exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
           
            res.status(200).json(data);
        }
    });
}

exports.updatehomepageVideo = function (req, res) {
    homePageVideoDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.videoTitle = req.body.adsDescription;
            data.videoLink = req.body.adsTitle;
            data.addedDate = req.body.link;
            
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    // data.adsImageName = env.ImageServerPath + 'smallbanner' + '/' + data._id + '/' + data.adsImageName;
                    res.status(200).json(data);
                }
            })
        }
    })
}



// exports.updatePublishADS = function(req,res) {
//     var second = [];
//     for(let i = 0; i <= req.body.length -1; i++) {
//          first = req.body[i]._id;
//          second.push(first);
//     }
//     adsDetail.updateMany({'_id': second},
//     { $set: {'publish': true}}).select().exec(function(err, data) {
//         if(err) {
//             res.status(500).json(err);
//         } else {
//             adsDetail.find({}).select().sort({
//                 position: 1
//             }).exec(function (err, adsImages) {
//                 if (err) {
//                     res.status(500).send({
//                         message: "Some error occurred while retrieving notes."
//                     });
//                 } else {
//                     var adsLength = adsImages.length - 1;
//                     for (var i = 0; i <= adsLength; i++) {
//                         adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
//                     }
//                     res.status(200).json(adsImages);
//                 }
//             });
//         }
//     })
// }

// exports.UpdateUnPublishADS = function(req,res) {
//     var second = [];
//     for(let i = 0; i <= req.body.length -1; i++) {
//          first = req.body[i]._id;
//          second.push(first);
//     }
//     adsDetail.updateMany({'_id': second},
//     { $set: {'publish': false}}).select().exec(function(err, data) {
//         if(err) {
//             res.status(500).json(err);
//         } else {
//             adsDetail.find({}).select().sort({
//                 position: 1
//             }).exec(function (err, adsImages) {
//                 if (err) {
//                     res.status(500).send({
//                         message: "Some error occurred while retrieving notes."
//                     });
//                 } else {
//                     var adsLength = adsImages.length - 1;
//                     for (var i = 0; i <= adsLength; i++) {
//                         adsImages[i].adsImageName = env.ImageServerPath + 'smallbanner' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
//                     }
//                     res.status(200).json(adsImages);
//                 }
//             });
//         }
//     })
// }