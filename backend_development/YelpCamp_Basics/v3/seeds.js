/*
1. require campgrounds and mongoose
2. require the new comments model
2. create an data array with 3 campgrounds
2. create a function seedDB which removes the whole database
3. in the seedDB function populate the array data via a foreach loop
4. create a comment for each one in the loop where you create one campground after console.log('added campgroud)
    1. comment
    2. author

5. push the new create comment in the campground.comment.push(comment)
6. save the campground
7. conslole.log ('new created comment was added)
. export the function via module.export =  seedDB;
.
*/

var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [{
        name: 'Granite Hill',
        image: 'https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg',
        description: 'blah blah blah'
    }, {
        name: 'Devils Peak',
        image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg',
        description: 'blah blah blah'
    },
    {
        name: 'Mosquito Creek',
        image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg',
        description: 'blah blah blah'
    }
];

function removeComments() {
    Comment.remove({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Step 1: Removed all Comments!')
        }
    });
}

function seedDB() {
    removeComments();
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Step 2: Removed all campgrounds');
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('Step 3: Campgrounds are created.')
                            // Create a comment
                        Comment.create({
                            text: 'nice, but I want WiFi',
                            author: 'Lino Catucci'
                        }, function(err, newComment) {
                            if (err) {
                                console.log(err)
                            } else {
                                campground.comments.push(newComment);
                                campground.save();
                                console.log('Step 4: Created new comment!')
                            }
                        });
                    }
                });
            });
        }
    })
}

module.exports = seedDB;