var contactMgr = require('./contactUsMgr');

module.exports = function(app) {
    app.route('/createcontactus')
    .post(contactMgr.createContactUs);  // Create contact us

    app.route('/getallcontactus')
    .get(contactMgr.getAllContactDetails); // Get All Contact-us
}