var mongoose = require('mongoose');

const ContactUsSchema = new mongoose.Schema({
    mobileNumber: String,
    emailId: String,
    customerName: String,
    description: String
});
const ContactUs = mongoose.model('contactUs', ContactUsSchema);
module.exports = ContactUs;