// Add requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressSanitizer = require('express-sanitizer');
var app = express();

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_movie_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// database schema
/*
title, 
image,
actors,
body - more info about movie,
created (date)
*/

// MONGOOSE/MODEL CONFIG
//for image you can also have a default image if one is not provided.
// 1e create schema

var movieSchema = new mongoose.Schema({
    title: String,
    image: {
        type: String,
        default: 'imdb-iphone.png'
    },
    actors: String,
    body: String,
    created: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
    }
});

var Movie = mongoose.model('Movie', movieSchema);

// RESTFUL ROUTES

// Test movie to have something in the db to show
// for the INDEX route
// Movie.create({
//     title: "The Sopranos",
//     image: "http://cdn3.artofthetitle.com/assets/sm/upload/05/4l/7u/54/sopranos-black.jpg",
//     actors: "James Gandolfini, Lorraine Bracco, Edie Falco",
//     body: "New Jersey mafia family movie"
// });

// INDEX ROUTE + REDIRECT
// redirect from home

// INDEX ROUTE

// NEW ROUTE - show form to create new movie information


// CREATE ROUTE


// SHOW ROUTE
// shows one particular MOVIE in details based on the ID


// EDIT ROUTE (Show edit form for one MOVIE)


// UPDATE ROUTE	/movies/:id	PUT


// DESTROY ROUTE Destroy	/dogs/:id	DELETE	
// Delete a particular dog, then redirect somewhere	Dog.findByIdAndRemove()

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// APPLICATION LISTEN LOCAL
app.listen('3001', function () {
    console.log('Movie app 2 server has been started')
});