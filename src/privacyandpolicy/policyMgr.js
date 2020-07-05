var policyDA = require('./policyDA');

exports.createPrivacyPolicy = function (req, res) {
    try {
        policyDA.createPrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.getPrivacyPolicy = function (req, res) {
    try {
        policyDA.getPrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.updatePrivacyPolicy = function (req, res) {
    try {
        policyDA.updatePrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}
