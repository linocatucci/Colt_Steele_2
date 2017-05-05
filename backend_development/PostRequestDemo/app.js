var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.listen('3000', function () {
    console.log('Post request Demo app started!')
})

// listen port on Cloud 9
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });