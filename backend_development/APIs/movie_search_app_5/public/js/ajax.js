// // $.get('https://www.omdbapi.com/?apikey=ed6ba6e4&s=star', function(data) {
// //     data.Search.forEach(function(data) {
// //         console.log(data.Title);
// //     })
// // });

$.get('/results', function(data) {
    console.log(data);
});

// $('search-form').submit(function(e) {
//     e.preventDefault();
//     console.log('TESTESTEST');
//     // debugger;
//     // $.get('/results', function(data) {
//     //     debugger
//     //     data.Search.forEach(function(data) {
//     //         debugger
//     //         console.log(data.Title);
//     //     });
//     // });
// });

// if (data.length >= 0) {
//     data.Search.forEach(function(data) {
//         debugger
//         console.log(data.Title);
//     });
// } else {
//     return console.log('nothing to display');
// }