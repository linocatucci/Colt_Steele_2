var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedsDB = require("./seeds"),
    flash = require('connect-flash'),
    methodOverride = require('method-override');

// rquiring routes
var campgroundRoutes = require('./routes/campgrounds');
var commentRoutes = require('./routes/comments');
var indexRoutes = require('./routes/index');

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

// use flash messages. Install and require connect-flash
app.use(flash());

// MethodOverride
app.use(methodOverride('_method'));

// to avoid the deprecated message 
mongoose.Promise = global.Promise;

// create the database yelp_camp with the db connection 
mongoose.connect('mongodb://localhost/yelp_camp');
//  get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('We are connected to DB!');
});

// remove and populate seed data
// seedsDB(); // 

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

// PASSPORT CONFIGURATION
// configure session for the user
app.use(require('express-session')({
    secret: 'Julia is de allerliefste!',
    resave: false,
    saveUninitialized: false,
    cookie: {
        _expires: 360000
    } // time im ms == 3 minutes
}));
// PASSPORT CONFIGURATION
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// encoding the data, serialize the data and putting it back in the session (serialize it)
// reading the session, taking the data from the session, unencoding it (deserialize) it
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MIDDLEWARE ON THE APPLICATION WHICH PASSES THE currentUser to be used on every route!
app.use(function (req, res, next) {
    // whatever we put in res.locals can be used in our templates
    res.locals.currentUser = req.user;
    // to view messages in all templates and to use DRY you can add it in app.js
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    // res.locals.message = req.flash('success');
    // you need to have next otherwise it will stop. And it needs to move to the rest of the code in 
    // the route!
    next();
});


// app.use("/campgrounds",campgroundRoutes);
// The code above means "mount the routes from campgroundRoutes(required at top of app.js) 
// to the /campgrounds route. 
// So any of the routes inside of campgroundRoutes will be prefixed with /campgrounds.

// use the route files we just have required
// key : value 
// the /campgrounds will be appended to all campgroundRoutes
// the /campgrounds/:id/comments will be appended to all comment routes
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);
app.use(indexRoutes);

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('The YelpCamp Server has started!');
});