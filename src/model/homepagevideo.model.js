var mongoose = require('mongoose');

const HomePageVideoSchema = new mongoose.Schema({
   
    videoTitle: String,
    videoLink: String,
    addedDate: Date,
    publish: Boolean,
    
});
const homepageVideo = mongoose.model('videos', HomePageVideoSchema);
module.exports = homepageVideo;