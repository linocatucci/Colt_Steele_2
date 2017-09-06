var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var flash = require('connect-flash');
var app = express();

// APP CONFIG
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// tell nodejs to use the public folder with js and css files.
// old style to use the public directory
// app.use(express.static('public'));
// __dirname is the directory where the app.js application is started from
app.use(express.static(__dirname + '/public'));

// use flash messages. Install and require connect-flash
app.use(flash());

// MIDDLEWARE ON THE APPLICATION WHICH PASSES THE currentUser to be used on every route!
// app.use(function(req, res, next) {
//     // to view messages in all templates and to use DRY you can add it in app.js
//     res.locals.error = req.flash('error');
//     res.locals.success = req.flash('success');
//     // res.locals.message = req.flash('success');
//     // you need to have next otherwise it will stop. And it needs to move to the rest of the code in 
//     // the route!
//     next();
// });

// ROUTE CONFIG:
// INDEX TO SEARCH PAGE
app.get('/', function(req, res) {
    res.render('search')
});

// app.get('/results', function(req, res) {
//     var query = req.query.searchtext;
//     var apikey = '&apikey=ed6ba6e4';
//     var url = 'http://www.omdbapi.com/?s=' + query + apikey;
//     request(url, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             var data = JSON.parse(body);
//             if (req.xhr) {
//                 res.json(data)
//             } else {
//                 res.render('results', {
//                     data: data
//                 });
//             }
//         } else {
//             console.log('SOMETHING WENT WRONG!')
//         }
//     });
// });


//http: //www.omdbapi.com/?t=sicario&plot=full&apikey=ed6ba6e4
app.get('/results', function(req, res) {
    // info from the query string
    var apikey = '&apikey=ed6ba6e4';
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?s=' + query + apikey;
    request(url, function(err, response, body) {
        // turn the body string into a JSON (javascript object)
        console.log('eerste query ' + query);
        if (typeof query === 'undefined') {
            console.log('no query');
        } else {
            var results = JSON.parse(body);
            if (!err && response.statusCode == 200) {
                if (req.xhr) {
                    console.log('werk ditook?');
                    res.json(body);
                } else {
                    res.render('results', {
                        data: results
                    });
                }
                //res.send(results["Search"][0]['Title'])
            } else {
                console.log('ERROR');
                console.log(err)
            }
        }
    });
});


// app.get('/', function (req, res) {
//     res.render('search');
// })

// bij Heroku en cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function() {
    console.log('Movie app has started on port 3000!');
});

// &apikey=ed6ba6e4
// http://www.omdbapi.com/?apikey=ed6ba6e4&s
// ?s=star (star wars, star trek etc)
// http://www.omdbapi.com/?s=star&apikey=ed6ba6e4
// i= by imbd id
// http://www.omdbapi.com/?i=tt3896198&apikey=ed6ba6e4
// http://www.omdbapi.com/?i=tt2345759&apikey=ed6ba6e4
// http://www.omdbapi.com/?t=sicario&plot=full&apikey=ed6ba6e4