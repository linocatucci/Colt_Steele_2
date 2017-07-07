var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('/ home was visited');
    res.send('Hi there, welcome to my assignment!')
})

app.get('/speak/:animal', function (req, res) {
    var subreddit = req.params.animal;
    var subreddit1 = req.params;
    console.log(subreddit);
    console.log(subreddit1);
    if (subreddit === 'pig') {
        res.send('Oink')
        console.log('this is a pig!')
    } else if (subreddit === 'cow') {
        res.send('Mooooo');
        console.log('this is a cow!')
    } else if (subreddit === 'dog') {
        res.send('Woof Woof');
        console.log('this is a dog');
    } else {
        console.log('animals!!!!');
        res.send('This is an animal!')
    }
})

app.get('/repeat/:word/:number', function (req, res) {
    var subredditWord = req.params.word;
    var subredditNumber = parseInt(req.params.number);
    var outputword = [];
    //console.log(req.params)
    console.log(req)
    // console.log(subredditWord);
    // console.log(subredditNumber);

    for (var i = 0; i < subredditNumber; i++) {
        outputword.push(subredditWord);
        // res.send('print het woord een aantal keer uit!');
    }
    console.log(outputword);
    res.send(outputword.join(' '));
})

app.get('*', function (req, res) {
    console.log('someone made a request to a non-existing page');
    res.send('Sorry, page not found! What are you doing with your life?!');
})

app.list

app.listen('3000', function () {
    console.log('Server has started for Express Assignment!');
})

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded poort nr maar van cloud 9 ipv localhost.
// // https://webdevbootcamp-linocatucci.c9users.io/
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('server has started!!')
// })