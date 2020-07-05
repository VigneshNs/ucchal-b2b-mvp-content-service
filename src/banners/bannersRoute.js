var bannerMgr = require('./bannersMgr');
var upload = require('../config/multer.config');

module.exports = function(app) {
    app.route('/createbanner')
    .post(bannerMgr.createBanners);  // Create Banner Details

    app.route('/uploadbannerimage/:id')
    .put(upload.array("uploads[]"), bannerMgr.addBannerImage); //  Upload Selected Banner Image

    app.route('/storebannerimagename/:id')
    .put(bannerMgr.addBannerName); //  Add Banner Image Name

    app.route('/getbanner')
    .get(bannerMgr.getBanner);  // Get All Banners

    
    app.route('/getbannerforui')
    .get(bannerMgr.getBannerForUI);  // Get All Banners For UI

    app.route('/deletebanner/:id')
    .delete(bannerMgr.deleteBanner);  // Delete Banner

    app.route('/getsinglebanner/:id')
    .get(bannerMgr.findSingleBanner);  //  Get Single Banner

    app.route('/updatebanner/:id')
    .put(bannerMgr.updateBanner);  // Update Banner Detail

    app.route('/updatebannerimage/:id')
    .put(upload.array("uploads[]"), bannerMgr.updateBannerImage); //  Update Selected Banner Image
 
    app.route('/updatepublishbanner')
    .put(bannerMgr.updatePublishBanner); //  Update Publish Banner Image

    app.route('/updateunpublishbanner')
    .put(bannerMgr.UpdateUnPublishBanner); //  Update  UnPublish Banner Image
}
