var secondDetails = require('../model/secondRow.model');
var thirdDetails = require('../model/thirdRow.model');
var fifthDetails = require('../model/fifthRow.model');
var sixthDetails = require('../model/sixthRow.model');
var seventhDetails = require('../model/seventhRow.model');

exports.createSecond = function(req, res) {
    secondDetails.find({}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            if(findData.length === 0) {
                var create = new secondDetails(req.body);
                create.save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                });
            } else {
                findData[0].title = req.body.title;
                findData[0].description = req.body.description;
                findData[0].productDetails = req.body.productDetails;
                findData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            }
        }
    } )
}

exports.getSecondRowProduct = function(req, res) {
    secondDetails.find({}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.getSingleSecondRowProduct = function(req, res) {
    secondDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deleteSecondRowProduct = function (req, res) {
    secondDetails.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            secondDetails.find({}).select().exec(function (err, data) {
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
exports.getPublishedSecondRow = function (req, res) {
    secondDetails.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            /* var adsLength = adsImages.length - 1;
            for (var i = 0; i <= adsLength; i++) {
                adsImages[i].adsImageName = env.ImageServerPath + 'ads' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            } */
            res.status(200).json(data);
        }
    });
}
/* exports.updatePublishSecondRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    secondDetails.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            secondDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */
exports.updateSecondRowStatus = function(req, res) {
    secondDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            data.publish = req.body.publish;
            data.save(function(err, saveData) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    secondDetails.find({}).select().exec(function(err, findData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(findData);
                        }
                    })
                }
            })
        }
    })
}
/* exports.UpdateUnPublishSecondRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    secondDetails.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            secondDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */

// Third Row
exports.createThrid = function(req, res) {
    thirdDetails.find({}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            if(findData.length === 0) {
                var create = new thirdDetails(req.body);
                create.save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            } else {
                findData[0].title = req.body.title;
                findData[0].description = req.body.description;
                findData[0].productDetails = req.body.productDetails;
                findData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            }
        }
    } )
}
exports.deleteThirdRowProduct = function (req, res) {
    thirdDetails.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            thirdDetails.find({}).select().exec(function (err, data) {
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


exports.getThridRowProduct = function(req, res) {
    thirdDetails.find({}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.getSingleThirdRowProduct = function(req, res) {
    thirdDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.getPublishedThirdRow = function (req, res) {
    thirdDetails.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            /* var adsLength = adsImages.length - 1;
            for (var i = 0; i <= adsLength; i++) {
                adsImages[i].adsImageName = env.ImageServerPath + 'ads' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            } */
            res.status(200).json(data);
        }
    });
}
/* exports.updatePublishThirdRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    thirdDetails.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            thirdDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */

exports.updateThirdRowStatus = function(req, res) {
    thirdDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            data.publish = req.body.publish;
            data.save(function(err, saveData) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    thirdDetails.find({}).select().exec(function(err, findData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(findData);
                        }
                    })
                }
            })
        }
    })
}
/* exports.UpdateUnPublishThirdRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    thirdDetails.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            thirdDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */



/* exports.createfifth = function(req, res) {
    var create = new fifthDetails(req.body);
    create.save(function(err, saveData) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(saveData);
        }
    })
} */


// Fifth Row

exports.createfifth = function(req, res) {
    fifthDetails.find({}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            if(findData.length === 0) {
                var create = new fifthDetails(req.body);
                create.save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            } else {
                findData[0].title = req.body.title;
                findData[0].description = req.body.description;
                findData[0].productDetails = req.body.productDetails;
                findData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            }
        }
    } )
}

exports.getFifthRowProduct = function(req, res) {
    fifthDetails.find({}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.getSingleFifthRowProduct = function(req, res) {
    fifthDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deleteFifthRowProduct = function (req, res) {
    fifthDetails.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            fifthDetails.find({}).select().exec(function (err, data) {
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
exports.getPublishedFifthRow = function (req, res) {
    fifthDetails.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            /* var adsLength = adsImages.length - 1;
            for (var i = 0; i <= adsLength; i++) {
                adsImages[i].adsImageName = env.ImageServerPath + 'ads' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            } */
            res.status(200).json(data);
        }
    });
}
/* exports.updatePublishFifthRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    fifthDetails.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            fifthDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */


exports.updateFifthRowStatus = function(req, res) {
    fifthDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            data.publish = req.body.publish;
            data.save(function(err, saveData) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    fifthDetails.find({}).select().exec(function(err, findData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(findData);
                        }
                    })
                }
            })
        }
    })
}

/* exports.UpdateUnPublishFifthRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    fifthDetails.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            fifthDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */


// Sixth Row

exports.createSixthRow = function(req, res) {
    sixthDetails.find({}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            if(findData.length === 0) {
                var create = new sixthDetails(req.body);
                create.save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            } else {
                
                findData[0].title = req.body.title;
                findData[0].description = req.body.description;
                findData[0].productDetails = req.body.productDetails;
                findData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            }
        }
    } )
}

exports.getSixthRowProduct = function(req, res) {
    sixthDetails.find({}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.getSingleSixthRowProduct = function(req, res) {
    sixthDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deleteSixthRowProduct = function (req, res) {
    sixthDetails.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            sixthDetails.find({}).select().exec(function (err, data) {
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

exports.getPublishedSixthRow = function (req, res) {
    sixthDetails.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(data);
        }
    });
}

exports.updateSixthRowStatus = function(req, res) {
    sixthDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            data.publish = req.body.publish;
            data.save(function(err, saveData) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    sixthDetails.find({}).select().exec(function(err, findData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(findData);
                        }
                    })
                }
            })
        }
    })
}
/* exports.updatePublishSixthRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    sixthDetails.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            sixthDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */

/* exports.UpdateUnPublishSixthRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    sixthDetails.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            sixthDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */

// Seventh Row

exports.createSeventhRow = function(req, res) {
    seventhDetails.find({}).select().exec(function(err, findData) {
        if(err) {
            res.status(500).json(err);
        } else {
            if(findData.length === 0) {
                var create = new seventhDetails(req.body);
                create.save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            } else {
                
                findData[0].title = req.body.title;
                findData[0].description = req.body.description;
                findData[0].productDetails = req.body.productDetails;
                findData[0].save(function(err, data) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            }
        }
    } )
}

exports.getSeventhRowProduct = function(req, res) {
    seventhDetails.find({}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.getSingleSeventhRowProduct = function(req, res) {
    seventhDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deleteSeventhRowProduct = function (req, res) {
    seventhDetails.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            seventhDetails.find({}).select().exec(function (err, data) {
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

exports.getPublishedSeventhRow = function (req, res) {
    seventhDetails.find({'publish': true}).select().sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            /* var adsLength = adsImages.length - 1;
            for (var i = 0; i <= adsLength; i++) {
                adsImages[i].adsImageName = env.ImageServerPath + 'ads' + '/' + adsImages[i]._id + '/' + adsImages[i].adsImageName;
            } */
            res.status(200).json(data);
        }
    });
}
/* exports.updatePublishSeventhRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    seventhDetails.updateMany({'_id': second},
    { $set: {'publish': true}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            seventhDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */

exports.updateSeventhRowStatus = function(req, res) {
    seventhDetails.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            data.publish = req.body.publish;
            data.save(function(err, saveData) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    seventhDetails.find({}).select().exec(function(err, findData) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(findData);
                        }
                    })
                }
            })
        }
    })
}
/* exports.UpdateUnPublishSeventhRow = function(req,res) {
    var second = [];
    for(let i = 0; i <= req.body.length -1; i++) {
         first = req.body[i]._id;
         second.push(first);
    }
    seventhDetails.updateMany({'_id': second},
    { $set: {'publish': false}}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            seventhDetails.find({}).select().sort({
                position: 1
            }).exec(function (err, data) {
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
} */