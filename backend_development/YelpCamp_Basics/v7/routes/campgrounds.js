// ==============================
// CAMPGROUND ROUTES
// ==============================

//INDEX - show all campgrounds
app.get('/campgrounds', function(req, res) {
    console.log('Camground page!');
    console.log(req.user);
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
app.post('/campgrounds', isLoggedIn, function(req, res) {
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
app.get('/campgrounds/new', isLoggedIn, function(req, res) {
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