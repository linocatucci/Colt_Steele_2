#YelpCamp

##Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
   * Name
   * Image

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* create the comments and campgrounds view directory (views/comments ... campgrounds)
* change the routes and the res.render() to the correct ejs file
* Add the new comment form
    - pass in the campground data with find campground by id 
    - group the text and author with comment[text], comment[author]
* post route
    - lookup the campground using the ID
    - create new comment
    - connect new comment to campground (push)
    - save the campgrounds
    - redirect campground show page
* create a new button on the campgrounds/id page to ad a comment (redirect it to /comments/new)

#Style Show Page
* Add sidebar to show page
* Display comments nicely

##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

##Refactoring the YelpCamp application and routes
1. split the routes in a specific  directory and own file
    - copy paste the code from app.js
    - use the var router = express.Router() in the files
2. require the route files in each other
    - export the router variabel with : module.exports = router;
3. change all routes app. to router.
4. in app.js. require the 3 files (camp, comm, indx) in the app.js file to the right location
5. in the app.js we need to tell that the app is going to use the 3 file (set in step 4): app.use(commentRoutes), (campgroundRoutes) etc.
6. In the comments file, you need to require campgrounds and comments, in the campgrounds file you need to do that too
7. check jslint error where some are not declared
8. dry up the come by shortening the route name. Appending the text /campgrounds/:id etc.
9. In the req.params.id of the campground is not passed thru the comments file. You can use var router = express.Router({mergeParams: true})


RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dogs
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments        POST