// npm request
// Simplified HTTP request client.
// most used Simplified HTTP request client : https://github.com/request/request

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

// var request = require('request');
// // request kan ook http://www.google.com of http://www.yahoo.com of wat anders bv de sunset api
// request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
//     if (error) {
//         console.log('something went wrong!');
//         console.log(error);
//     } else {
//         if (response.statusCode == 200) {
//             //thing worked
//             console.log(body)
//         }
//     }
// })

// use typeof en dan het object of variable om te zien welk type het is
// request kan ook http://www.google.com of http://www.yahoo.com of wat anders bv de sunset api
var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // use typeof en dan het object of variable om te zien welk type het is
        console.log(typeof body)
        // om JSON terug te krijgen vanuit een string gebruikt dan JSON.parse(object)
        var parsedData = JSON.parse(body);
        console.log(parsedData)
        console.log(parsedData['query']['results']['channel']['astronomy']['sunset']);
        console.log('Sunset in Hawaii is at ..... ' + parsedData.query.results.channel.astronomy.sunset);
    }
});