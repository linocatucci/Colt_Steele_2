// check of specific todos by clicking
$('li').on('click', function () {
    // !!!!!!! onderste kan vervangen worden door:
    console.log('clicked Li?');
    $(this).toggleClass('completed');

    // // object manier
    // /*
    // $(this).css({
    //             textDecoration: 'line-through',
    //             color: 'gray'

    //         })
    // */
    // // if li is gray then make it black 
    // // else turn it to gray
    // console.log($(this).css('color'))

    // if ($(this).css('color') === 'rgb(128, 128, 128)') {
    //     console.log('set color black')
    //     $(this).css({
    //         textDecoration: 'none',
    //         color: 'black'

    //     })
    // } else {
    //     $(this).css({
    //         textDecoration: 'line-through',
    //         color: 'gray'

    //     })
    // }

    // de gewone manier
    // $(this).css('text-decoration', 'line-through')
    // $(this).css('color', 'gray')
});