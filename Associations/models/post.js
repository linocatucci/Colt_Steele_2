var mongoose = require('mongoose');

// first the schema
var postSchema = mongoose.Schema({
    title: String,
    content: String
});

// then the model
// var Post = mongoose.model('Post', postSchema);
// module.exports = Post;
// OR 
module.exports = mongoose.model('Post', postSchema);