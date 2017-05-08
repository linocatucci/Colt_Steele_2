/*
Web application to search for movies based on id or name:
http://www.omdbapi.com/
http://www.omdbapi.com/?i=tt1856010&plot=full&tomatoes=true
http://www.omdbapi.com/?s=california


*/

var express = require('express')
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

// 2 routes, / and /results

app.get('/', function (req, res) {
    res.render('search')
})

app.get('/results', function (req, res) {
    // get data from the query string
    // console.log(req.query.searchtext);
    console.log(req)
    var query = req.query.searchtext;
    // set url string
    var url = 'http://www.omdbapi.com/?s=' + query;

    console.log('results of the movie search');
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // use typeof en dan het object of variable om te zien welk type het is
            // console.log(typeof body)
            // om JSON terug te krijgen vanuit een string gebruikt dan JSON.parse(object)
            var data = JSON.parse(body);
            // console.log(data);
            // console.log(typeof data)
            // res.send(data);
            // res.send(data['Search'][0]);
            // res.send(data.Search[0].Title);
            res.render('results', {
                data: data
            });
        }
    });
})

app.get('/search', function (req, res) {
    console.log('search for a movie')
    res.send('search for a movie');
})

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('Movie app has started!');
})