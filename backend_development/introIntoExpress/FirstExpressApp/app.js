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

// example of route parameters
app.get('/r/:subredditName', function (req, res) {
    var subreddit = req.params.subredditName;
    console.log(req.params);
    console.log('USED A ' + subreddit.toUpperCase() + ' SUBREDDIT');
    res.send('WELCOME TO ' + subreddit.toUpperCase() + ' SUBREDDIT');
})
// example of route parameters, variables
app.get('/r/:subredditName/comments/:id/:title', function (req, res) {
    console.log('USED A SUBREDDIT comments');
    console.log(req.params);
    res.send('WELCOME TO the comments page');
})
// any other route if not excists. This route needs to go last!
app.get('*', function (req, res) {
    console.log('Someone made a reqeust to an non-excisting page!')
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