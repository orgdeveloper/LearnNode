const fs = require('fs');


// fs.renameSync('./assets/Text.txt', './assets/Text');

fs.rmdir('./test',(err => {
    if(err){
        throw err;
    }

    console.log("deleted the text folder");
}));
