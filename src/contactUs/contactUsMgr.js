var contactDA = require('./contactUsDA');

exports.createContactUs = function(req, res) {
    try {
        contactDA.createContactUs(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getAllContactDetails = function(req, res) {
    try {
        contactDA.getAllContactDetails(req, res);
    } catch (error) {
        console.log(error);
    }
}