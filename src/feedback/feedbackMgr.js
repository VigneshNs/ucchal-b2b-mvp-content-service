var feedbackDA = require('./feedbackDA');

exports.createFeeadBack = function(req, res) {
    try {
        feedbackDA.createFeeadBack(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getFeedBack = function(req, res) {
    try {
        feedbackDA.getFeedBack(req, res); 
    } catch (error) {
        console.log(error);
    }
}