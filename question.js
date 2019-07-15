// process.stdin
// process.stdout


// process.stdout.write("Hello 💩");
// process.stdout.write("\n\n\nWorks!??!!?\n");


const questions = [
    "What is ur na?",
    "What u doin'?",
    "fav lang ?"
]

const ask = (i = 0) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(` >  `);

}

ask();


const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    
    Thank you for your answers!
    
    `)
})
