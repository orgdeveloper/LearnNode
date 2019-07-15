// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);
//
// const [, , firstName, Lastname] = process.argv;
//
// console.log(`Your first name is  ${firstName} ${Lastname}`);


const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab('--greeting');
const user = grab('--user');

console.log(`${greeting} ${user}`);
