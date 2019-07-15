const fs = require("fs");

const myText = `


WEEEE OOOO WEEE OOO
Here a com on de
police wooo woo
that's the sound
of the beast
👮🏼‍♀️🚓🚔🚨
`;

fs.writeFile('./assets/myFile.txt', myText.trim(), err => {
    if(err){
        throw err;
    }
    console.log("File saved");
})
