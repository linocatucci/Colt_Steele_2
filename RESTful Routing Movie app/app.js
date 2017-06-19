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
body,
created (date)
*/

// MONGOOSE/MODEL CONFIG
//for image you can also have a default image if one is not provided.
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
app.get('/', function (req, res) {
    res.redirect('/movies')
});

// INDEX ROUTE
app.get('/movies', function (req, res) {
    Movie.find({}, function (err, allMovies) {
        if (err) {
            console.log(err)
        } else {
            res.render('index', {
                movies: allMovies
            });
        }
    });
});

// NEW ROUTE - show form to create new movie information
app.get('/movies/new', function (req, res) {
    res.render('new')
});

// CREATE ROUTE
app.post('/movies', function (req, res) {
    Movie.create(req.body.movie, function (err, newMovie) {
        if (err) {
            res.render('new')
        } else {
            res.redirect('/movies')
        }
    });
});

// SHOW ROUTE
// shows one particular MOVIE in details based on the ID
app.get('/movies/:id', function (req, res) {
    Movie.findById(req.params.id, function (err, foundMovie) {
        if (err) {
            res.redirect('/movies')
        } else(
            res.render('show', {
                movie: foundMovie
            })
        )
    });
});

// EDIT ROUTE (Show edit form for one MOVIE)
app.get('/movies/:id/edit', function (req, res) {
    Movie.findById(req.params.id, function (err, foundMovie) {
        if (err) {
            res.redirect('/movies')
        } else {
            res.render('edit', {
                movie: foundMovie
            })
        }
    })
});

// UPDATE ROUTE	/movies/:id	PUT
app.put('/movies/:id', function (req, res) {
    // findByIdAndUpdate (id, newData, callback)
    Movie.findByIdAndUpdate(req.params.id, req.body.movie, function (err, updatedMovie) {
        if (err) {
            res.redirect('/movies')
        } else {
            res.redirect('/movies/' + req.params.id)
        }
    })
})

// DESTROY ROUTE Destroy	/dogs/:id	DELETE	
// Delete a particular dog, then redirect somewhere	Dog.findByIdAndRemove()
app.delete('/movies/:id', function (req, res) {
    // findByIdAndUpdate (id, newData, callback)
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect('/movies')
        } else {
            res.redirect('/movies')
        }
    })
})

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('The Movie App Server has started!');
});