var mongoose = require('mongoose');
var PolicyDetails = require('./policyDetails.model');
const PrivacyPolicySchema = new mongoose.Schema({
    policyHeading: String,
    policies: [PolicyDetails],
});
const PrivacyPolicy = mongoose.model('privacypolicy', PrivacyPolicySchema);
module.exports = PrivacyPolicy;