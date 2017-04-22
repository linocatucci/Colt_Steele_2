// $('button').on('click', function () {
//     $('div').fadeOut(1000)
//     console.log('fade completed')
// });

// //of na de fade out de console.log

// $('button').on('click', function () {
//     $('div').fadeOut(1000, function () {
//         console.log('fade completed')
//     })
// });

// // bv een item uit een lijst verwijderen en niet display : none: zetten

// // $('button').on('click', function () {
// //     $('div').fadeOut(1000, function () {
// //         $(this).remove();
// //     })
// // });

// // fade In

// $('button').on('click', function () {
//     $('div').fadeIn(1000, function () {
//         console.log('fade completed')
//     })
// });

// fadeToggle 

// $('button').on('click', function () {
//     $('div').fadeToggle(1000, function () {
//         console.log('fade completed')
//     })
// });

// $('button').on('click', function () {
//     $('div').slideUp(500, function () {
//         console.log('fade completed')
//     })
// });

// $('button').on('click', function () {
//     $('div').slideToggle(500, function () {
//         console.log('fade completed')
//     })
// });

$('button').on('click', function () {
    $('div').slideToggle(500, function () {
        $(this).remove();
    })
});