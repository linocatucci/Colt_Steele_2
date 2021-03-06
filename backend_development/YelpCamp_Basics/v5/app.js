var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var seedsDB = require('./seeds');
var app = express();
app.set('view engine', 'ejs');
// 
app.use(bodyParser.urlencoded({
    extended: true
}));
// tell nodejs to use the public folder with js and css files.
// old style to use the public directory
// app.use(express.static('public'));
// __dirname is the directory where the app.js application is started from
app.use(express.static(__dirname + '/public'));
console.log(__dirname);
// to avoid the deprecated message 
mongoose.Promise = global.Promise;

// create the database yelp_camp with the db connection 
mongoose.connect('mongodb://localhost/yelp_camp');
//  get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('We are connected to DB!')
});

// remove and populate seed data
seedsDB();

// Campground.create({
//         name: 'Devils Peak',
//         image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg',
//         description: 'This is a huge granite hill, no bathroom. Beautiful mountain'
//     },
//     function (err, campground) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('A campground was added to the DB!')
//             console.log(campground);
//         }
//     });

// var campgrounds = [{
//     name: 'Granite Hill',
//     image: 'https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg'
// }, {
//     name: 'Devils Peak',
//     image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'
// }, {
//     name: 'Mosquito Creek',
//     image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg'
// }, {
//     name: 'Devils Peak',
//     image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'
// }, {
//     name: 'Devils Peak',
//     image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'
// }, {
//     name: 'Mosquito Creek',
//     image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg'
// }, {
//     name: 'Granite Hill',
//     image: 'https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg'
// }, {
//     name: 'Devils Peak',
//     image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'
// }];

//INDEX - return to home page
app.get('/', function(req, res) {
    console.log('This will be the landing page soon!');
    res.render('landing');
});

//INDEX - show all campgrounds
app.get('/campgrounds', function(req, res) {
    console.log('Camground page!');
    // get all the campgrounds from the DB!
    Campground.find({}, function(err, allCampgrounds) {
            if (err) {
                console.log(err)
            } else {
                res.render('campgrounds/index', {
                    campgrounds: allCampgrounds
                });
            }
        })
        // res.render('campgrounds', {campgrounds: campgrounds});

});
// convention to have the post method (add campgrounds) the same name as get the campgrounds

//CREATE - add new campground to DB
app.post('/campgrounds', function(req, res) {
        // res.send('post werkt.')
        // get data from form
        var name = req.body.name;
        var image = req.body.image;
        var description = req.body.description;
        var newCampground = {
                name: name,
                image: image,
                description: description
            }
            // add to campground array
        Campground.create(newCampground, function(err, newCreatedCampground) {
            if (err) {
                console.log(err)
            } else {
                // redirect to campgrounds page
                res.redirect('/campgrounds')
            }
        });
    })
    // convention to have the GET method (new campgrounds) with the campgrounds/new format.
    // this is the form to add a new campground.

//NEW - show form to create new campground
app.get('/campgrounds/new', function(req, res) {
    res.render('campgrounds/new');
})

// SHOW - shows more info about one campground
// always after the new otherwise new will be used as id
app.get('/campgrounds/:id', function(req, res) {
    //find the campground with provided ID
    var campId = req.params.id;
    // find Campgrounds find all posts for that campgrounds and populate them to the array
    Campground.findById(campId).populate('comments').exec(function(err, foundCampground) {
        if (err) {
            console.log(err)
        } else {
            // render the show campground template with that campground
            //render show template with that campground 
            //console.log(foundCampground);
            res.render('campgrounds/show', {
                campground: foundCampground
            });
        }
    });
});

// ==============================
// COMMENTS ROUTES
// ==============================

// NEW COMMENTS ROUTE
app.get('/campgrounds/:id/comments/new', function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err)
        } else {
            res.render('comments/new', { campground: campground })
        }
    });
});

// CREATE - add new COMMENT TO CAMPGROUND
app.post('/campgrounds/:id/comments', function(req, res) {
    // lookup the campground using the ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err)
        } else {
            // create new comment
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err)
                } else {
                    // connect new comment to campground (push)
                    foundCampground.comments.push(comment);
                    //save the campgrounds
                    foundCampground.save();
                    // redirect campground show page
                    res.redirect('/campgrounds/' + req.params.id);
                }
            })
        }
    });
});


// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function() {
    console.log('The YelpCamp Server has started!');
});