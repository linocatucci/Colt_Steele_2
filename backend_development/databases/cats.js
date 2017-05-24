var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// adding a new cat to the cat db, which will be meervourd in cats
var Cat = mongoose.model('Cat', catSchema);

// var george = new Cat({
//     name: 'Polly',
//     age: 11,
//     temperament: 'sweet'
// });

// george.save(function (err, cat) {
//     if (err) {
//         console.log('SOMETHING WENT WRONG!!')
//     } else {
//         console.log('WE JUST SAVED A CAT TO THE DB:')
//         console.log(cat);
//     }
// });


// create and save cat in 1 method instead of first create and then save a cat
Cat.create({
    name:'Snuitje',
    age: 6,
    temperament:'nice'
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
})

// retrieve all cats from the DB and console.log the cats
Cat.find({}, function(err, cats){
    
    if(err){
        console.log('Oh NO an error!');
        console.log(err);
    } else {
        console.log('Retrieved cats');
        console.log(cats);
    }
})