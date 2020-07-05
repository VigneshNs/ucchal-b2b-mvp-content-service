var faqDetail = require('../model/faq.model');


exports.createFAQ = function (req, res) {
    var faq = new faqDetail(req.body);
    faq.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while saving data'
            })
        } else {
            faqDetail.find({}).select().exec(function (err, faqData) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while retreiving data'
                    })
                } else {
                    res.status(200).json(faqData);
                }
            })
        }
    })

}

exports.getFAQ = function (req, res) {
    faqDetail.find({}).select().exec(function (err, faqData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(faqData);
        }
    })
}
exports.getSingleFAQ = function (req, res) {
    faqDetail.findOne({
        '_id': req.params.id
    }, function (err, faqData) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            res.status(200).json(faqData);

        }
    })
}
exports.deleteFAQ = function (req, res) {

    faqDetail.findByIdAndRemove(req.params.faqId, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            faqDetail.find({}).select().exec(function (err, faqData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {

                    res.status(200).json(faqData);
                }
            });


        }
    });
}

exports.updateFAQ = function (req, res) {
    faqDetail.find({
        '_id': req.params.id,
    }, function (err, faqData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            faqData[0].faqHeading = req.body.faqHeading;
            faqData[0].faqDetails = req.body.faqDetails;
            faqData[0].save(function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    faqDetail.find({}).select().exec(function (err, faqData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            res.status(200).json(faqData);
                        }
                    })
                }
            })
        }
    });
}
