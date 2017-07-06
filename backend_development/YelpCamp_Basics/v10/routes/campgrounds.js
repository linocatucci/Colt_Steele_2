// ==============================
// CAMPGROUND ROUTES
// ==============================
var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
var middleware = require('../middleware'); //index.js is de default file where express is looking for

//INDEX - show all campgrounds
router.get('/', function (req, res) {
    console.log('Camground page!');
    // get all the campgrounds from the DB!
    Campground.find({}, function (err, allCampgrounds) {
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
router.post('/', middleware.isLoggedIn, function (req, res) {
    // res.send('post werkt.')
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    // create a new object with username and id and add this to the newCampground object.
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name,
        image: image,
        description: description,
        author: author
    }
    // add username to the new created campground
    // console.log('###########' + req.user);
    // newCampground.author.id = req.user._id;
    // newCampground.author.username = req.user.username;
    // console.log('this is the new campground ' + newCampground);
    // newCampground.save();
    // add to campground array
    Campground.create(newCampground, function (err, newCreatedCampground) {
        if (err) {
            console.log(err)
        } else {
            // console.log('*********** ' + newCreatedCampground)
            // redirect to campgrounds page
            res.redirect('/campgrounds')
        }
    });
})
// convention to have the GET method (new campgrounds) with the campgrounds/new format.
// this is the form to add a new campground.

//NEW - show form to create new campground
router.get('/new', middleware.isLoggedIn, function (req, res) {
    res.render('campgrounds/new');
})

// SHOW - shows more info about one campground
// always after the new otherwise new will be used as id
router.get('/:id', function (req, res) {
    //find the campground with provided ID
    var campId = req.params.id;
    // find Campgrounds find all posts for that campgrounds and populate them to the array
    Campground.findById(campId).populate('comments').exec(function (err, foundCampground) {
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

/*
EDIT	/dogs/:id/edit	GET	Show edit form for one dog	Dog.findById()
UPDATE	/dogs/:id	PUT	Update particular dog, then redirect somewhere	Dog.findByIdAndUpdate()
*/

// EDIT -- /campground/:id/edit	GET	Show edit form for one campground	
// Campground.findById()
router.get('/:id/edit', middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err)
            res.redirect('/campground');
        } else {
            res.render('campgrounds/edit', {
                campground: foundCampground
            });
        }
    });
});

// UPDATE	/campground/:id	PUT	Update particular campground, then redirect somewhere 
// Campground.findByIdAndUpdate()
router.put('/:id', middleware.checkCampgroundOwnership, function (req, res) {
    // 1. find and update the correct campground
    // findByIdAndUpdate (id, newData, callback)
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updateCampground) {
        if (err) {
            console.log(err)
            res.redirect('/campgrounds');
        } else {
            // 2. redirect to the updated campground
            res.redirect('/campgrounds/' + req.params.id);
        }
    });
});

// DELETE / DESTROY CAMPGROUND ROUTE
// Delete a particular campground, then redirect somewhere Campground.findByIdAndRemove()

router.delete('/:id', middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err)
            res.redirect('/campgrounds')
        } else {
            res.redirect('/campgrounds');
        }
    });
});

module.exports = router;