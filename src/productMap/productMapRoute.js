var productMgr = require('./productMapMgr');

module.exports = function (app) {
    // Second Row

    app.route('/createsecond')
        .post(productMgr.createSecond);

    app.route('/getsecond')
        .get(productMgr.getSecondRowProduct);
        
    app.route('/getsinglesecond/:id')
        .get(productMgr.getSingleSecondRowProduct);    

    app.route('/deletesecondrow/:id')
    .delete(productMgr.deleteSecondRowProduct);

    app.route('/getpublishedsecondrow')
    .get(productMgr.getPublishedSecondRow);    

    app.route('/updatesecondrowstats/:id')
    .put(productMgr.updateSecondRowStatus);  // Update Publish Second Row Status

    
    /* app.route('/updateunpublishsecondrow')
    .put(productMgr.UpdateUnPublishSecondRow); */  // Update Un Publish Second Row Status

    // Third Row
    
    app.route('/createthird')
    .post(productMgr.createThrid);

    app.route('/getthird')
    .get(productMgr.getThridRowProduct); 

    app.route('/getsinglethird/:id')
    .get(productMgr.getSingleThirdRowProduct);

    app.route('/deletethirdrow/:id')
    .delete(productMgr.deleteThirdRowProduct);       

    app.route('/getpublishedthirdrow')
    .get(productMgr.getPublishedThirdRow);    

    app.route('/updatethirdrowstatus/:id')
    .put(productMgr.updateThirdRowStatus);  // Update  Third Row Status

    
   /*  app.route('/updateunpublishthirdrow')
    .put(productMgr.UpdateUnPublishThirdRow); */  // Update Un Publish Third Row Status

    // Fifth Row

    app.route('/createfifth')
    .post(productMgr.createfifth);

    app.route('/getfifth')
    .get(productMgr.getFifthRowProduct);    

    app.route('/getsinglefifth/:id')
    .get(productMgr.getSingleFifthRowProduct);

    app.route('/deletefifthrow/:id')
    .delete(productMgr.deleteFifthRowProduct);
    
    app.route('/getpublishedfifthrow')
        .get(productMgr.getPublishedFifthRow);    

      /*   app.route('/updatepublishfifthrow')
        .put(productMgr.updatePublishFifthRow); */  // Update Publish Fifth Row Status
    
        app.route('/updatefifthrowstatus/:id')
        .put(productMgr.updateFifthRowStatus);

        /* app.route('/updateunpublishfifthrow')
        .put(productMgr.UpdateUnPublishFifthRow); */  // Update Un Publish Fifth Row Status

        // Sixth Row

        app.route('/createsixthrow')
        .post(productMgr.createSixthRow);
    
        app.route('/getsixthrow')
        .get(productMgr.getSixthRowProduct);    

        app.route('/getsinglesixth/:id')
        .get(productMgr.getSingleSixthRowProduct);
    
        app.route('/deletesixthrow/:id')
        .delete(productMgr.deleteSixthRowProduct);    

        app.route('/getpublishedsixthrow')
        .get(productMgr.getPublishedSixthRow);    

        app.route('/updatesixthrowstatus/:id')
        .put(productMgr.updateSixthRowStatus);  // Update  Sixth Row Status
    
        
        /* app.route('/updateunpublishsixthrow')
        .put(productMgr.UpdateUnPublishSixthRow);  */ // Update Un Publish Sixth Row Status

                // Seventh Row

                app.route('/createseventhrow')
                .post(productMgr.createSeventhRow);
            
                app.route('/getseventhrow')
                .get(productMgr.getSeventhRowProduct);    

                app.route('/getsingleseventh/:id')
                .get(productMgr.getSingleSeventhRowProduct);
            
                app.route('/deleteseventhrow/:id')
                .delete(productMgr.deleteSeventhRowProduct);
                
                app.route('/getpublishedseventhrow')
                .get(productMgr.getPublishedSeventhRow);    

                app.route('/updateseventhrowstatus/:id')
                .put(productMgr.updateSeventhRowStatus);  // Update  Seventh Row Status
            
                
                /* app.route('/updateunpublishseventhrow')
                .put(productMgr.UpdateUnPublishSeventhRow);  */ // Update Un Publish Seventh Row Status
}