// var Campground = require('../models/campground');
// var Comment = require('../models/comment');

// // all the middleare goes here
// var middlewareObj = {};

// middlewareObj.checkCampgroundOwnerShip = function (req, res, next) {
//     // is the user logged in?
//     if (req.isAuthenticated()) {
//         Campground.findById(req.params.id, function (err, foundCampground) {
//             if (err) {
//                 res.redirect("back");
//             } else {
//                 // does user own the campground?
//                 if (foundCampground.author.id.equals(req.user._id)) {
//                     next();
//                 } else {
//                     res.redirect("back");
//                 }
//             }
//         });
//     } else {
//         res.redirect("/login");
//     }
// };

// middlewareObj.checkCommentOwnerShip = function (req, res, next) {
//     if (req.isAuthenticated()) {
//         Comment.findById(req.params.comment_id, function (err, foundComment) {
//             if (err) {
//                 res.redirect('/login');
//             } else {
//                 if (foundComment.author.id.equals(req.user._id)) {
//                     next();
//                 } else {
//                     res.redirect('back');
//                 }
//             }
//         });
//     } else {
//         console.log('else statement!')
//         // res.redirect('/login');
//     }
// };

// middlewareObj.isLoggedIn = function (req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// };
// module.exports = middlewareObj;

var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function (err, foundCampground) {
            if (err) {
                res.redirect("back");
            } else {
                // does user own the campground?
                if (foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err) {
                res.redirect("back");
            } else {
                // does user own the comment?
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;