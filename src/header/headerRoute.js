var  headerMgr = require('./headerMgr');
var upload = require('../config/multer.config');

module.exports = function (app) {
    app.route('/addheaderimagename')
    .put(headerMgr.createHeader); // add Header Image Name

    app.route('/getheaderimage')
    .get(headerMgr.getHeaderImage);  // Get Header Image
}