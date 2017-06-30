// ==============================
// COMMENTS ROUTES
// ==============================
var express = require('express');
// mergeParams zorgt ervoor dat de params uit de compground wordt doorgegeven naar de comments file.
var router = express.Router({
    mergeParams: true
});
var Campground = require('../models/campground');
var Comment = require('../models/comment');


// COMMENTS NEW ROUTE
// /campgrounds/:id/comments
router.get('/new', isLoggedIn, function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err)
        } else {
            res.render('comments/new', {
                campground: campground
            });
        }
    });
});

// COMMENTS CREATE - add new COMMENT TO CAMPGROUND
// isLoggedIn is a middleware to check if somebody is logged in 
// /campgrounds/:id/comments
router.post('/', isLoggedIn, function (req, res) {
    // lookup the campground using the ID
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err)
        } else {
            // create new comment
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err)
                } else {
                    comment.author.username = req.user.username;
                    comment.author.id = req.user.id;
                    res.locals.currentUser = req.user;
                    console.log('Dit is het id van de user: ' + comment.author.id + ' ' + req.user.username);
                    // connect new comment to campground (push)
                    comment.save();
                    foundCampground.comments.push(comment);
                    //save the campgrounds
                    foundCampground.save();
                    // redirect campground show page
                    res.redirect('/campgrounds/' + req.params.id);
                }
            });
        }
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;