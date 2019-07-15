const collectAnswers = require('./lib/collectAnswers');

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const questions = [
    "What is your name? ",
    "Where are you? ",
    "What is your usecase? "
];

// const collectAnswers = (questions, done) => {
//     const answers = [];
//     [firstQuestion, secondQuestion, thirdQuestion] = questions;
//
//     const questionAnswered = answer => {
//         answers.push(answer);
//         if(answers.length < questions.length){
//             rl.question(questions[answers.length] , questionAnswered);
//         }
//         else{
//             done(answers);
//         }
//     }
//
//     rl.question(firstQuestion, questionAnswered);
// };

// module.exports = (questions, done) => {
//     const answers = [];
//     [firstQuestion, secondQuestion, thirdQuestion] = questions;
//
//     const questionAnswered = answer => {
//         answers.push(answer);
//         if(answers.length < questions.length){
//             rl.question(questions[answers.length] , questionAnswered);
//         }
//         else{
//             done(answers);
//         }
//     }
//
//     rl.question(firstQuestion, questionAnswered);
// };

const answerEvents =  collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`questions answered: ${answer}`));
answerEvents.on("complete", answers => {
    console.log("Thank you for your answers!");
    console.log(answers);
});
answerEvents.on("complete", () => {
    process.exit();
});
