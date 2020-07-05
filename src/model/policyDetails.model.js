var mongoose = require('mongoose');
const PrivacyPolicySchema = new mongoose.Schema({
    policyQuestion: String,
    policyAnswers: String,
});
module.exports = PrivacyPolicySchema;