var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

// APP CONFIG
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// ROUTE CONFIG:
// INDEX TO SEARCH PAGE
app.get('/', function(req, res) {
    res.render('search')
});

//http: //www.omdbapi.com/?t=sicario&plot=full&apikey=ed6ba6e4
app.get('/results', function(req, res) {
    // info from the query string
    var apikey = '&apikey=ed6ba6e4';
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?s=' + query + apikey;
    request(url, function(err, response, body) {
        // turn the body string into a JSON (javascript object)
        var results = JSON.parse(body)
        if (!err && response.statusCode == 200) {
            res.render('results', {
                data: results
            });
            //res.send(results["Search"][0]['Title'])
        }
    })
});


// app.get('/', function (req, res) {
//     res.render('search');
// })

// app.get('/results', function (req, res) {
//     var query = req.query.searchtext;
//     var url = 'http://www.omdbapi.com/?s=' + query + apikey;
//     request(url, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             var data = JSON.parse(body);
//             res.render('results', {
//                 data: data
//             });
//         } else {
//             console.log('SOMETHING WENT WRONG!')
//         }
//     });
// });


// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3010', function() {
    console.log('Movie app has started!');
});

// &apikey=ed6ba6e4
// http://www.omdbapi.com/?apikey=ed6ba6e4&s
// ?s=star (star wars, star trek etc)
// http://www.omdbapi.com/?s=star&apikey=ed6ba6e4
// i= by imbd id
// http://www.omdbapi.com/?i=tt3896198&apikey=ed6ba6e4
// http://www.omdbapi.com/?i=tt2345759&apikey=ed6ba6e4
// http://www.omdbapi.com/?t=sicario&plot=full&apikey=ed6ba6e4