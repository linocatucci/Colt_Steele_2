var express = require('express');
var app = express();


// make route:
// '/' => 'Hi there' 
app.get('/', function (req, res) {
    // req (request) and res (response) are objects, they contain all the information 
    // about the request that is made. And response contain all the info what we are going to response with
    console.log('someone made a request to home');
    res.send('hi there!');
});
// '/bye' => 'Goodbye!'
app.get('/bye', function (req, res) {
    console.log('someone made a request to /bye');
    res.send('goodbye!');

});
// '/dog' => 'MEOW!'
app.get('/dog', function (req, res) {
    console.log('someone made a request to /dog');
    res.send('MEOW!');
});

// any other route if not excists
app.get('*', function (req, res) {
    res.send('you are a star!!')
})


// voor locaal kun je dit gebruiken
app.listen('3000', function () {
    console.log('server has started!!');

});

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded poort nr maar van cloud 9 ipv localhost.
// // https://webdevbootcamp-linocatucci.c9users.io/
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('server has started!!')
// })