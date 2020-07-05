var termsDetail = require('../model/termsAndUse.model');



exports.createTerms = function (req, res) {
    var terms = new termsDetail(req.body);
    terms.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while saving data'
            })
        } else {
            termsDetail.find({}).select().exec(function (err, termsData) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while retreiving data'
                    })
                } else {
                    res.status(200).json(termsData);
                }
            })
        }
    })
}

exports.getTerms = function (req, res) {
    termsDetail.find({}).select().exec(function (err, termsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(termsData);
        }
    })
}

exports.deleteTerms = function (req, res) {
    termsDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            termsDetail.find({}).select().exec(function (err, termsData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {

                    res.status(200).json(termsData);
                }
            });


        }
    });
}


exports.updateTerms = function (req, res) {
    termsDetail.find({
        '_id': req.params.id,
    }, function (err, termdata) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            termdata[0].heading = req.body.heading;
            termdata[0].details = req.body.details;
            termdata[0].save(function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    termsDetail.find({}).select().exec(function (err, termsData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            res.status(200).json(termsData);
                        }
                    })
                }
            })
        }
    });
}

exports.getSingleTerms = function (req, res) {
    termsDetail.findOne({'_id': req.params.id}).select().exec(function (err, termsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(termsData);
        }
    })
}