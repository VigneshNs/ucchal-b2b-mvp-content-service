var termsMgr = require('./termsanduseMgr');

module.exports = function (app) {
    app.route('/termsanduse')
        .post(termsMgr.createTerms); // Create Term and Use

    app.route('/getterms')
        .get(termsMgr.getTerms); // Get Terms and Use

    app.route('/deleteterms/:id')
        .delete(termsMgr.deleteTerms); // Delete Terms and Use

    app.route('/editTerms/:id')
        .put(termsMgr.updateTerms); // Update Terms and Use

    app.route('/gettermssingle/:id')
        .get(termsMgr.getSingleTerms); // Update Terms and Use
}