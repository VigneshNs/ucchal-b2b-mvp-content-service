var mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({
    address: String,
    instagramLink: String,
    facebookLink: String,
    pintrestLink: String,
    googlePlusLink: String,
    youtubeLink: String,
    twitterLink: String,
    map: String,
    contactNo: String,
    alternativeContactNo: String,
    logoImageName: String,
    mailId: String,
    aboutUsPreview: String
});

const Footer = mongoose.model('footer', FooterSchema);
module.exports = Footer;