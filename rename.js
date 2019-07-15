const fs = require('fs');

fs.rename('./assets/myText.txt', './assets/Text.txt', (err) => {
    if(err){
        throw err;
    }
    console.log('Successfully renamed myFile!')
})

setTimeout( ()=> {
    fs.unlinkSync('./assets/alex.jpg');
}, 4000);
