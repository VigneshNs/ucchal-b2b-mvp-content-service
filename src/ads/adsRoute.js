var adsMgr = require('./adsMgr');
var upload = require('../config/multer.config');

module.exports = function(app) {
    app.route('/createads')
    .post(adsMgr.createAds); // Create ADS Details

    app.route('/uploadadsimage/:id')
    .put(upload.array("uploads[]"), adsMgr.addAdsImage); // Upload Selected ADS Image

    app.route('/storeadsimagename/:id')
    .put(adsMgr.addAdsName); // add ADS Image Name

    app.route('/getads')
    .get(adsMgr.getAds); // Get All ADS 

    app.route('/getpublishedads')
    .get(adsMgr.getPublishedAds); // Get published ADS 

    app.route('/deleteads/:id')
    .delete(adsMgr.deleteAds);  // Delete Selected ADS
    
    app.route('/getsingleads/:id')
    .get(adsMgr.findSingleADS);  // Get Single ADS

    app.route('/updateads/:id')
    .put(adsMgr.updateADS);  //  Update ADS

    app.route('/updateimage/:id')
    .put(upload.array("uploads[]"), adsMgr.updateADSImage);  // Update ADS Image

    
    app.route('/updatepublishads')
    .put(adsMgr.updatePublishADS);  // Update Publish ADS Status

    
    app.route('/updateunpublishads')
    .put(adsMgr.UpdateUnPublishADS);  // Update Un Publish ADS Status
}