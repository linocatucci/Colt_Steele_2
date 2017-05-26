var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// database schema
/*
title, 
image
body
created (date)
*/

// MONGOOSE/MODEL CONFIG
//for image you can also have a default image if one is not provided.
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    create: {
        type: Date,
        default: Date.now
    }
});
var Blog = mongoose.model('Blog', blogSchema);

// Test blog to have something in the db to show for the INDEX route
// Blog.create({
//     title: "Test blog",
//     image: "https://unsplash.com/search/dog?photo=D9XX3Cjoh2s",
//     body: "Dit is een test blog post"
// });

// RESTFUL ROUTES:
// 1. INDEX

app.get('/', function (req, res) {
    res.redirect('/blogs')
})

app.get('/blogs', function (req, res) {
    // retrieve all data from the database
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err)
        } else {
            res.render('index', {
                blogs: blogs
            });
        }
    });
});



// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('The BlogPost App Server has started!');
})