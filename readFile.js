const fs = require("fs");


fs.readFile('./assets/alex.jpg', (err, text) => {
    if(err){
        throw err;
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }


    console.log("File contents read: \n");
    console.log(text);
});





