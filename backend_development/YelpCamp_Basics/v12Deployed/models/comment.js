var mongoose = require('mongoose');

// SCHEMA SETUP FOR YELP CAMP CAMPGROUNDS
var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// then the module seteup
// export the campground model
// 2 ways to export 1st:
// var Campground = mongoose.model('Campground', campgroundSchema);
// module.exports = Campground
// 2nd short variant
module.exports = mongoose.model('Comment', commentSchema);