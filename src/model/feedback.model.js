var mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    customerName: String,
    mobileNumber: String,
    emailId: String,
    description: String
});

const Feedback = mongoose.model('feedback', FeedbackSchema);
module.exports = Feedback;