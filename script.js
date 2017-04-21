// on all buttons
$('button').click(function(){
console.log()
});

// $(this) jQuery variant van this. Nu specifiek op de button object
// wat aangeklikt is.
$('button').click(function(){
var text = $(this).text();
console.log('You clicked ' + text)
});
