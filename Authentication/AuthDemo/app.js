var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var User = require('./models/user');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

var expressSession = require('express-session');
var app = express();
app.set('view engine', 'ejs');

app.use(require('express-session')({
    secret: 'Julia is mijn dochter',
    resave: false,
    saveUninitialized: false
}));


// encoding the data, serialize the data and putting it back in the session (serialize it)
// reading the session, taking the data from the session, unencoding it (deserialize) it
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));
// to avoid the deprecated message 
mongoose.Promise = global.Promise;

// create the database yelp_camp with the db connection 
mongoose.connect('mongodb://localhost/auth_demo_app');
//  get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('We are connected to DB!')
});

//========================
// ROUTES
//========================

app.get('/', function(req, res) {
    res.render('home')
});

app.get('/secret', function(req, res) {
    res.render('secret')
});

// AUTH ROUTES
// show register form
app.get('/register', function(req, res) {
    res.render('register')
});

// handling user sign up
app.post('/register', function(req, res) {
    req.body.username;
    req.body.password;
    // the password is outside the new User creation, it's passed in as an argument
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            // use the return to short circuit the flow. Immediatly bail out of the flow.
            return res.redirect('/register');
        } else {
            // runs the serialize method (passport.serializeUser(User.serializeUser());)
            // use local strategy
            passport.authenticate('local')(req, res, function() {
                res.redirect('/secret');
            });
        }
    });
});

app.listen('3000', function() {
    console.log('Authentication app has started!');
});

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });