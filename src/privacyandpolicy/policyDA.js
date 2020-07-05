var policyDetail = require('../model/privacyandpolicy.model');


exports.createPrivacyPolicy = function (req, res) {

    policyDetail.find({}).select().exec(function (err, policyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var policy = new policyDetail(req.body);
            if (policyData.length === 0) {

                policy.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        policyDetail.find({}).select().exec(function (err, policyData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(policyData);
                            }
                        })
                    }
                })


            } else {
                policyData[0].policyHeading = req.body.policyHeading;
                policyData[0].policies = req.body.policies;

                policyData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        policyDetail.find({}).select().exec(function (err, policyData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(policyData);
                            }
                        })
                    }
                })

            }
        }
    });
}
exports.getPrivacyPolicy = function (req, res) {
    policyDetail.find({}).select().exec(function (err, policyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(policyData);
        }
    })
}
exports.updatePrivacyPolicy = function (req, res) {
    policyDetail.find({
        '_id': req.params.id,
    }, function (err, policyData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            policyData[0].policyHeading = req.body.policyHeading;
            policyData[0].policies = req.body.policies;
            policyData[0].save(function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    policyDetail.find({}).select().exec(function (err, policyData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            res.status(200).json(policyData);
                        }
                    })
                }
            })
        }
    });
}