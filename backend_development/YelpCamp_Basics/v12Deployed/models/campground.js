var mongoose = require('mongoose');

// SCHEMA SETUP FOR YELP CAMP CAMPGROUNDS
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

// then the module seteup
// export the campground model
// 2 ways to export 1st:
// var Campground = mongoose.model('Campground', campgroundSchema);
// module.exports = Campground
// 2nd short variant
module.exports = mongoose.model('Campground', campgroundSchema);