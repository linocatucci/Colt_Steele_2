// Add requires
// express, mongoose, bodyParser, methodOverride, expressSantizer, app


// APP CONFIG
// connect to db, set ejs, use public, use bodyParser, use methodoverride, use expressSantizer 

// database schema
/*
title, 
image, (also with default)
actors,
body - more info about movie,
created (date, default: Date.now)
*/

// MONGOOSE/MODEL CONFIG
//for image you can also have a default image if one is not provided.
// 1e create movie schema


// Create movie model with mongoose model 


// RESTFUL ROUTES

// Test movie to have something in the db to show
// for the INDEX route
// Movie.create({
//     title: "The Sopranos",
//     image: "http://cdn3.artofthetitle.com/assets/sm/upload/05/4l/7u/54/sopranos-black.jpg",
//     actors: "James Gandolfini, Lorraine Bracco, Edie Falco",
//     body: "New Jersey mafia family movie"
// });

// INDEX ROUTE + REDIRECT
// redirect from home


// INDEX ROUTE


// NEW ROUTE - show form to create new movie information


// CREATE ROUTE


// SHOW ROUTE
// shows one particular MOVIE in details based on the ID


// EDIT ROUTE (Show edit form for one MOVIE)

// // UPDATE ROUTE	/movies/:id	PUT

// DESTROY ROUTE Destroy	/dogs/:id	DELETE	
// Delete a particular dog, then redirect somewhere	Dog.findByIdAndRemove()


// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Server has started for Express ESJ Assignment!')
// });

// APPLICATION LISTEN LOCAL, port 3000