// APP SETUP (REQUIRE)


// APP CONFIG (set and use)


// ROUTE CONFIG:
// INDEX TO SEARCH PAGE


// RESULT PAGE CONFIG - APP KEY, QUERY (query is the input field matched with the name), URL
//http: //www.omdbapi.com/?t=sicario&plot=full&apikey=ed6ba6e4


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

// LISTEN EN LOCAL PORT gebruiken


// &apikey=ed6ba6e4
// http://www.omdbapi.com/?apikey=ed6ba6e4&s
// ?s=star (star wars, star trek etc)
// http://www.omdbapi.com/?s=star&apikey=ed6ba6e4
// i= by imbd id
// http://www.omdbapi.com/?i=tt3896198&apikey=ed6ba6e4
// http://www.omdbapi.com/?i=tt2345759&apikey=ed6ba6e4
// http://www.omdbapi.com/?t=sicario&plot=full&apikey=ed6ba6e4