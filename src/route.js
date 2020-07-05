var contactRoute = require('./contactUs/contactUsRoute');
var headerRoute = require('./header/headerRoute');
var footerRoute = require('./footer/footerRoute');
var adsRoute = require('./ads/adsRoute');
var bannerRoute = require('./banners/bannersRoute');
var termsAnsUseRoute = require('./termsanduse/termsanduseRoute');
var faqRoute = require('./faq/faqRoute');
var privacyPolicyRoute = require('./privacyandpolicy/policyRoute');
var feedBackRoute = require('./feedback/feedbackRoute');
var productRoute = require('./productMap/productMapRoute');
var homepageVideoRoute = require('./add-homepage-video/homepagevideoRoute') 

exports.loadRoutes = function (app) {
    contactRoute(app);
    headerRoute(app);
    footerRoute(app);
    adsRoute(app);
    bannerRoute(app);
    termsAnsUseRoute(app);
    faqRoute(app);
    privacyPolicyRoute(app);
    feedBackRoute(app);
    productRoute(app);
    homepageVideoRoute(app);
}