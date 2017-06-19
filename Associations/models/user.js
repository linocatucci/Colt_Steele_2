var mongoose = require('mongoose')

// first the schema
var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

// then the model
// var User = mongoose.model('User', userSchema);
// module.exports = User
// OR
module.exports = mongoose.model('User', userSchema);