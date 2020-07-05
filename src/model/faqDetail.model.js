var mongoose = require('mongoose');

const FAQDetailchema = new mongoose.Schema({
    faqQuestion: String,
    faqAnswers: String,
});
module.exports = FAQDetailchema;