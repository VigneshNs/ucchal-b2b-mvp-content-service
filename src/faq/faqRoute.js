var faqMgr = require('./faqMgr');

module.exports = function (app) {
    app.route('/createfaq')
    .post(faqMgr.createFAQ); // Create FAQ

    app.route('/getfaq')
    .get(faqMgr.getFAQ); // Get All FAQ

    app.route('/singlefaq/:id')
    .get(faqMgr.getSingleFAQ);  // Get Single FAQ

    app.route('/deletefaq/:faqId')
    .delete(faqMgr.deleteFAQ);  // Delete Selected FAQ

    app.route('/editFAQ/:id')
    .put(faqMgr.updateFAQ);  // Update Selected FAQ
 }