var express = require("express");
var app = express();


app.get('/', function (req, res) {

    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function (req, res) {
    var thing = req.params.thing;
    // res.send('you fell in love with ' + thing);
    res.render('love.ejs', {
        thingVar: thing
    })
});

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('Server has started for Express Assignment!');
})