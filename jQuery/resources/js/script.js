// select all divs and give them a background purple
$('div').css('background', 'purple');
// select all highlight classes and give them a width of 200px
$('.highlight').css('width', '200px');
// give the div with id #third and give it a border
$('#third').css('border', '4px solid orange');
// give the first div the font color white
$('div:first-of-type').css('color', 'white');

// 6 common jQuery methods

/*

1. val()
2. text()
3. attr()
4. html()
5 addClass()
6. removeClass()
7. toggleClass()

*/
//get text from elements and set new text
// same as textContent in plain javascript
$('h1').text();

$('ul').text();

$('li').text();

$('h1').text('new text!!');

$('li').text('rusty, colts dog is adorable');

// Get text from inputs is .val()
$('input').val();
// or set the text to the input to empty string
$('input[type=text]').val('');

// html retrieves the inner html of the element
$('ul').html();

$('ul').html('<li>I have hacked your </li><li>Rusty is still adorable</li>');
$('li').html('<a href='
        http: //www.google.com'>click me</a>');