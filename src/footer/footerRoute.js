var footerMgr = require('./footerMgr');
var upload = require('../config/multer.config');

module.exports = function (app) {
    app.route('/createfooter')
    .post(footerMgr.createFooter);  //  Create Footer 

    app.route('/updatefooterlogoimage/:id')
    .put(upload.array("uploads[]"), footerMgr.createLogoImage);  // Upload Footer Image

    app.route('/getfooterdetail')
    .get(footerMgr.getFooterDetails);  // Get All Footer

    app.route('/updatefooterdetail/:id')
    .put(footerMgr.updateFooterDetails);  // Upload Footer Details

    app.route('/savefooterimagename/:id')
    .put(footerMgr.saveFooterImageName);  // Upload Footer Details
   
}