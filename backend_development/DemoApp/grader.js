// // node exercise 2
// // AVERAGE GRADE CALCULATION

// // define a new function *average*
// // it should take a single parameter; the array with scores
// // it should return the average score in the array , rounded to the nearest whole number



// Array with an for loop
// var scores = [90, 98, 89, 100, 100, 86, 94];
// var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

// function average(scores) {
//     var totalScore = 0;
//     var avgScore = 0;
//     var numberOfScores = 0;

//     for (var i = 0; i < scores.length; i++) {
//         numberOfScores = scores.length;

//         // loop thru the array and add the scores to the totalScore
//         // then divede the avgScore by the numberOfScores
//         // round the avgScores
//         // return the avgScores and console.log the avgScores
//         //console.log(numberOfScores);
//         totalScore += scores[i];

//     }
//     avgScore = Math.round(totalScore / numberOfScores);
//     console.log('Average Score:' + avgScore);
//     return avgScore;
// }

// console.log(average(scores));
// console.log(average(scores2));

// Array with an forEach loop
var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(scores) {
    var totalScore = 0;
    var avgScore = 0;
    var numberOfScores = 0;

    scores.forEach(function (element) {
        // number of scores in the array
        numberOfScores = scores.length;
        // tel alle scores bij elkaar op
        totalScore += element;

    });
    // bereken de gemiddelde score door totaalscore / aantal scores
    // en rond de scores af.
    avgScore = Math.round(totalScore / numberOfScores);
    //  avgScore = Math.round(totalScore / score.length);
    //console.log('Average Score:' + avgScore);
    return avgScore;
}
console.log('dit is de biologie test');
console.log(average(scores));
console.log('dit is de aardrijkskunde test');
console.log(average(scores2));