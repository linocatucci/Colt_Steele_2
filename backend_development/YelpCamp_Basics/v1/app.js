var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
// 
app.use(bodyParser.urlencoded({
    extended: true
}));

var campgrounds = [{
        name: 'Salmon creek',
        image: 'https://farm4.staticflickr.com/3361/3614172185_b666fcec1a.jpg'
    },
    {
        name: 'Granite Hill',
        image: 'https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg'
    },
    {
        name: 'Mosquito Creek',
        image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg'
    },
    {
        name: 'Devils Peak',
        image: 'https://farm1.staticflickr.com/661/32853307921_c804935e58.jpg'
    }
];

app.get('/', function (req, res) {
    console.log('This will be the landing page soon!');
    res.render('landing');
});

app.get('/campgrounds', function (req, res) {
    console.log('Camground page!');
    //res.render('campgrounds');
    res.render('campgrounds', {
        campgrounds: campgrounds
    });
});
// convention to have the post method (add campgrounds) the same name as get the campgrounds
app.post('/campgrounds', function (req, res) {
    // res.send('post werkt.')
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    }
    // add to campground array
    campgrounds.push(newCampground);

    // redirect to campgrounds page
    res.redirect('/campgrounds')
})
// convention to have the GET method (new campgrounds) with the campgrounds/new format.
// this is the form to add a new campground.
app.get('/campgrounds/new', function (req, res) {
    res.render('new');
})

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('The YelpCamp Server has started!');
})