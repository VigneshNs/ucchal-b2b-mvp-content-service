var policyMgr = require('./policyMgr');

module.exports = function (app) {
    app.route('/createprivacypolicy')
    .post(policyMgr.createPrivacyPolicy);  // Create Privacy Policy 

    app.route('/getprivacypolicy')
    .get(policyMgr.getPrivacyPolicy);  // Get Privacy Policy

    app.route('/editprivacypolicy/:id')
    .put(policyMgr.updatePrivacyPolicy);  // Update Privacy Policy
}