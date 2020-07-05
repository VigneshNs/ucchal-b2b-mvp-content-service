var homepageVideoMgr = require('./homepagevideoMgr');
var upload = require('../config/multer.config');

module.exports = function(app) {
    app.route('/createhomepageVideo')
    .post(homepageVideoMgr.createhomepageVideo); // Create homepage video Details


    app.route('/gethomepageVideo') 
    .get(homepageVideoMgr.gethomepageVideo); // Get All homepage video 

    app.route('/getPublishedhomepageVideo')
    .get(homepageVideoMgr.getPublishedhomepageVideo); // Get published homepage video 

    app.route('/deletehomepageVideo/:id')
    .delete(homepageVideoMgr.deletehomepageVideo);  // Delete Selected homepage video
   

    app.route('/updatehomepageVideo/:id')
    .put(homepageVideoMgr.updatehomepageVideo);  //  Update homepage video

    app.route('/changeVideoofVideo/:id')        // changes homepage video status
    .put(homepageVideoMgr.changesVideoStatus);   
}