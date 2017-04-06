var movieDB = [{
        title: "Sopranos",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Breaking Bad",
        rating: 5,
        hasWatched: true
    },
    {
        title: "homeland",
        rating: 5,
        hasWatched: true
    },
    {
        title: "House of Cards",
        rating: 5,
        hasWatched: true
    },
    {
        title: "the Accountant",
        rating: 5,
        hasWatched: false
    },
    {
        title: "The Godfather",
        rating: 5,
        hasWatched: true
    },
    {}
]

// forEach loop:
function checkMovieDB1(arr) {
    arr.forEach(function (el) {
        if (el.hasWatched === true) {
            console.log('you have seen: ' + el.title + ' with a rating of: ' + el.rating);
        } else {
            console.log('you have NOT seen: ' + el.title + ' with a rating of: ' + el.rating);
        }
    })
}

// traditionele for loop:
function checkMovieDB(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasWatched === true) {
            console.log('you have watched:' + ' ' + arr[i].title + ' with a rating of ' + arr[i].rating)
        } else {
            console.log('you have NOT seen:' + ' ' + arr[i].title + ' with a rating of ' + arr[i].rating)
        }
    }
}