var faqDA = require('./faqDA');



exports.createFAQ = function (req, res) {
    try {
        faqDA.createFAQ(req, res);

    } catch (error) {
        console.log(error);
    }
}

exports.getFAQ = function (req, res) {
    try {
        faqDA.getFAQ(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.getSingleFAQ = function (req, res) {
    try {
        faqDA.getSingleFAQ(req, res);

    } catch (error) {
        console.log(error);
    }
}


exports.deleteFAQ = function (req, res) {
    try {
        faqDA.deleteFAQ(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.updateFAQ = function (req, res) {
    try {
        faqDA.updateFAQ(req, res);

    } catch (error) {
        console.log(error);
    }
}
