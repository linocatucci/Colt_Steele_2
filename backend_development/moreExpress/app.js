var express = require("express");
var app = express();
// tells express to use the public folder for css files
app.use(express.static('public'));
// don't have to use the .ejs extentsion
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    res.render('home');
});

app.get('/fallinlovewith/:thing', function (req, res) {
    var thing = req.params.thing;
    // res.send('you fell in love with ' + thing);
    res.render('love', {
        thingVar: thing
    })
});

app.get('/posts', function (req, res) {
    var posts = [{
            title: 'post 1',
            author: 'Susy'
        },
        {
            title: 'My adorable pet bunny',
            author: 'Charlie'
        },
        {
            title: 'Can you believe this pomsky?',
            author: 'Colt'
        }
    ];
    res.render('posts', {
        posts: posts
    });
})

// bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// lokaal gebruiken
app.listen('3000', function () {
    console.log('Server has started for Express Assignment!');
})