// check of specific todos by clicking
// use the UL to listnen to the whole list. Otherwise new Li won't be listened on
$('ul').on('click', 'li', function () {
    // !!!!!!! onderste kan vervangen worden door lees ook de readme.txt:
    // toggleClass , automatisch toevoegen of verwijderen van een class!
    $(this).toggleClass('completed');
});
// click on X to delete todo
// use the UL to listen to the whole list. Only run when a span is clicked.
// Otherwise new span won't be listened on to delete
$('ul').on('click', 'span', function (event) {
    // alert('cliked on span')
    // delete the parent of the span, which is the li
    $(this).parent().fadeOut(200, function () {
        // the this below referres to the LI!
        $(this).remove();
    })
    //stops the event from bubbling up to parents
    event.stopPropagation();
});
// get the input text
$('input[type=text]').on('keypress', function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        var inputText = $(this).val();
        $(this).val('');
        // create new li and add to ul use APPEND!
        $('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + inputText + '</li>');
    }
});

// selecting and changing!
// select the pencil and change the input.
$('.fa-pencil-square-o').on('click', function () {
    // show input.
    $('input[type=text').fadeToggle('');
});