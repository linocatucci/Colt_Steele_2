// embedding data

/* 
- npm mongoose --save
1. require mongoose
2. connect to database (blog_demo database)
3.  define 2 entities
    - user 
        - has an email
        - a name
    - post
        - title 
        - content
4. create a Schema for both: userSchema, postSchema
5. create a model for both (mongoose.Model)
6. create a new user (charlie brown)
7. save the new user to the db, with newUser.save, the callback returns the error=err and the "data" = user
    console.log the data=user
8. create a new post
9. save the new post to the db, with newPost.save, the callback returns the error=err and the "data" = post
    console.log the data=post
10. embed the posts into the user schema [postSchema]
11. define the embedded schema of the post first
12. create a new user again (hermoine of zo)
13. push a new post in the new user newUser.posts.push({title:"ddddd",
                                                        content:"hdhdhddhdhdh"})
14. save the new user again. newUser.save
15. retrieve the new user (last created). user.findOne({name:"blah"}, function(err, user) is the data 
    coming back=user))
16. in the else, when we find the user, create another post (user.posts.push({}))
17.  outside the else save the the new user again. user.save(functione(err, user)) with callback if / else
18. 

*/
//  start embedding data code here:
var mongoose = require('mongoose');
// to avoid the deprecated message
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demo_blog');
//  get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('we are connected')
});

var postSchema = mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model('Post', postSchema);

var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model('User', userSchema);

// create new user
// var newUser = new User({
//     email: 'charlie@brown.com',
//     name: 'Charlie Brown'
// })

// newUser.save(function (err, user) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// });

// // create new post
// var newPost = new Post({
//     title: 'How to cook Italian',
//     content: 'pizza, spaghetti, penne, vongole etc'
// });

// newPost.save(function (err, post) {
//     if (err) {
//         console.log(err)
//     } else(
//         console.log(post)
//     )
// });
// create a second new user
// var newUser = new User({
//     email: 'Lino@catucci.com',
//     name: 'Lino Catucci'
// })

// newUser.save(function(err, user){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// });

// newUser.posts.push({title:"How to make club Sandwich", content:"chicken, avocado, chips, tomato"})
// newUser.save(function(err, user){
//     if(err){
//         console.log(err)
//     } else{
//         console.log(user)
//     }
// });

User.findOne({name:"Lino Catucci"}, function(err, user){
    if(err){
        console.log(err)
    } else{
        console.log('show the user who is found!')
        console.log(user)
    }
    console.log('create another post for this user.')
    user.posts.push({title:"how to bake a pizza",
            content:"tomatos, dough, mozzarella"
        });
    user.save(function(err, user){
        if(err){
            console.log(err)
        }else{
            console.log(user)
        }
    })
});

 