/*

most important events:
clicked()
keypress()
on()

on() vervangt alle andere

*/
// on all buttons
$('button').click(function () {
    console.log()
});

// $(this) jQuery variant van this. Nu specifiek op de button object
// wat aangeklikt is.
$('button').on('click', function () {
    var text = $(this).text();
    console.log('You clicked ' + text)
});


$('input').keypress(function (event) {
    if (event.keypress === 13) {

        console.log('you hit enter')
    }
});

$('input').on('keypress', function (event) {
    if (event.keypress === 13) {

        console.log('you hit enter')
    }
});

// on all buttons
$('button').click(function () {
    console.log()
});

// $(this) jQuery variant van this. Nu specifiek op de button object
// wat aangeklikt is.
$('button').click(function () {
    var text = $(this).text();
    console.log('You clicked ' + text)
});

$('input').on('keypress', function (event) {
    if (event.which === 13) {
        console.log('you hit enter')
    }
});

$('button').on('mouseenter', function () {
    $(this).css('font-weight', 'bold')
    console.log('mouse enter')
});

$('button').on('mouseleave', function () {
    $(this).css('font-weight', 'normal')
    console.log('mouse leave')
});