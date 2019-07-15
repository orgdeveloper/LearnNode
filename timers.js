const waitTime = 10000;
const waitInterval = 500;
let currentTime = 0;

const readline = require('readline');

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    // console.log(`waiting ${currentTime / 1000} seconds`);
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`waiting... ${p}%`);

};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval)
    console.log("\ndone\n");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
