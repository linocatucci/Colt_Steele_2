var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// adding a new cat to the db
var Cat = mongoose.model('Cat', catSchema);

var george = new Cat({
    name: 'Lotje',
    age: 11,
    temperament: 'Scared'
});

george.save(function (err, cat) {
    if (err) {
        console.log('SOMETHING WENT WRONG!!')
    } else {
        console.log('WE JUST SAVED A CAT TO THE DB:')
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log the cats