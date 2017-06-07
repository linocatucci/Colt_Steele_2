var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));

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
    created: {
        type: Date,
        default: Date.now
    }
});
var Blog = mongoose.model('Blog', blogSchema);

// Test blog to have something in the db to show
// for the INDEX route
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

// INDEX ROUTE
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

// NEW ROUTE - show form to create new blog post
app.get('/blogs/new', function (req, res) {
    res.render('new');
})

// CREATE ROUTE
app.post('/blogs', function (req, res) {
    // var title = req.body.title;
    // var image = req.body.image;
    // var body = req.body.body;
    // var newBlog = {
    //     title: title,
    //     image: image,
    //     body: body
    // }
    Blog.create(req.body.blog, function (err, newCreatedBlog) {
        if (err) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

// SHOW ROUTE
// shows one particular blog in details based on the ID
app.get('/blogs/:id', function (req, res) {
    // mongoose method (findById())
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect('/blogs')
        } else {
            res.render('show', {
                // inside the template the foundBlog is named blog
                blog: foundBlog
            });
        }
    })
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {

        if (err) {
            res.redirect('/blogs')
        } else {
            res.render('edit', {
                // inside the template the foundBlog is named blog
                blog: foundBlog
            });
        }
    });
});

// UPDATE ROUTE
// * Add Method-Override (npm install method-override --save, it will also need the ?_method=PUT)
// in the form
app.put('/blogs/:id', function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            // res.redirect('/blogs/' + updatedBlog.id); // or
            res.redirect('/blogs/' + req.params.id);
        }
    })
});

// DESTROY ROUTE
app.delete('/blogs/:id', function (req, res) {
    res.send('it worked!')
})

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('The BlogPost App Server has started!');
});