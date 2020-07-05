var feedbackMgr = require('./feedbackMgr');

module.exports = function(app) {
    app.route('/createfeedback').                               // Create Feedback
    post(feedbackMgr.createFeeadBack);  

    app.route('/getallfeedback').                                 // Retrieve all feedback
    get(feedbackMgr.getFeedBack);
}