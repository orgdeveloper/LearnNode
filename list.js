const fs = require("fs");
console.log("Reading files");
// const files = fs.readdirSync('./assets');


//asynchronous function will finish running at some random time
fs.readdir('./assets', (err, readFiles) => {
    if(err){
        throw err;
    }


    console.log("Finished reading files");
    console.log(readFiles);
});
// console.log("Finished reading files");
// console.log(files);


