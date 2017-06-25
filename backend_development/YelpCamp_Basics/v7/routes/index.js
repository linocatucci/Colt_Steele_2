// ==============================
// AUTH ROUTES
// all purpose routes
// ==============================

// OWN MIDDLEWARE FUNCTIONS!!

// isLoggedIn is a middleware to check if somebody is logged in 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// INDEX - return to home page
app.get('/', function(req, res) {
    var currentUser = req.user;
    console.log('This will be the landing page soon!');
    res.render('landing');
});

// show register form
app.get('/register', function(req, res) {
    res.render('register')
});

// register / create the user and authenticate the user
app.post('/register', function(req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/campgrounds');
        });
    })
});

// show the login form 
app.get('/login', function(req, res) {
    res.render('login')
});

// handeliing login logicactual login route
// this is done via a middleware, in this case the passport.authenticate('local')
// app.post('login', middleware, callback) then,
// the passport.authenticate method is called which is: 
// passport.use(new LocalStrategy(User.authenticate()));
// it will use the req.body.username and req.body.password and authenticate with DB
app.post('/login', passport.authenticate('local',

    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }

), function(req, res) {

});

// LOGOUT
app.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/campgrounds');
});