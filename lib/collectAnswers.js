const readline = require('readline');
const { EventEmitter } = require('events');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const questions = [
//     "What is your name? ",
//     "Where are you? ",
//     "What is your usecase? "
// ];

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

module.exports = (questions, done = f =>f) => {
    const answers = [];
    [firstQuestion, secondQuestion, thirdQuestion] = questions;
    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length] , questionAnswered);
        }
        else{
            emitter.emit("complete", answers);
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered);


    return emitter;
};

// collectAnswers(questions, answers => {
//     console.log("Thank you for your answers!");
//     console.log(answers);
//     process.exit()
// });

