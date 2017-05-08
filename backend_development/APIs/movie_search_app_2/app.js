var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('search');
})

app.get('/results', function (req, res) {
    var query = req.query.searchtext;
    var url = 'http://www.omdbapi.com/?s=' + query;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', {
                data: data
            });
        } else {
            console.log('SOMETHING WENT WRONG!')
        }
    });
});


// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('Movie app has started!');
})