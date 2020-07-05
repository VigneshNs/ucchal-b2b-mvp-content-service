var contactDetail = require('../model/contactUs.model');

exports.createContactUs = function (req, res) {
    var createContact = new contactDetail();
    createContact.customerName = req.body.customerName;
    createContact.mobileNumber = req.body.mobileNumber;
    createContact.emailId = req.body.emailId;
    createContact.description = req.body.description;
    createContact.save(function(err, contactData) {
        if(err) {
            res.status(500).send({
                "result": "error occured while saving data"
            });
        } else {
            res.status(200).json(contactData);
        }
    })
}

exports.getAllContactDetails = function (req, res) {
    contactDetail.find({}).select().exec(function (err, contactData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(contactData);
        }
    })
}
