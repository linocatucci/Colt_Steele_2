var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');

var friends = ['Ton', 'Suzan', 'Justin', 'Julia', 'Erik'];

app.get('/', function (req, res) {
    console.log('somebody nav to root')
    res.render('home');
});

app.get('/friends', function (req, res) {
    res.render('friends', {
        friends: friends
    });
})

// posting data needs a post route
app.post('/addfriend', function (req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends');
})

app.listen('3000', function () {
    console.log('Post request Demo app started!')
})

// listen port on Cloud 9
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });