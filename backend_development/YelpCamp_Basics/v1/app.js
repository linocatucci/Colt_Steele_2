var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    console.log('This will be the landing page soon!');
    res.render('landing');
});

app.get('/campgrounds', function (req, res) {
    var campgrounds = [{
            name: 'Salmon creek',
            image: 'https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg'
        },
        {
            name: 'Granite Hill',
            image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg'
        },
        {
            name: 'Mosquito Creek',
            image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg'
        },
        {
            name: 'Devils Peak',
            image: 'https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg'
        }
    ];
    console.log('Camground page!');
    //res.render('campgrounds');
    res.render('campgrounds', {
        campgrounds: campgrounds
    });
});

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('The YelpCamp Server has started!');
})