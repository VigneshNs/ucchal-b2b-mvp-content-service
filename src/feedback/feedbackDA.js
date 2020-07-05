var feedbackDetail = require('../model/feedback.model');

exports.createFeeadBack = function(req, res) {
    var feedback = new feedbackDetail();
    feedback.customerName = req.body.customerName;
    feedback.mobileNumber = req.body.mobileNumber;
    feedback.emailId = req.body.emailId;
    feedback.description = req.body.description;
    feedback.save(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}

exports.getFeedBack = function(req, res) {
    feedbackDetail.find({}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}