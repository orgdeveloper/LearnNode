const colorData = require('./assets/colors.json');
const fs = require('fs');

const colors = [];


colorData.colorList.forEach(color => {
    colors.push(color.color);
});


fs.appendFile('./assets/myFile.txt', colors, (err => {
    if(err){
        throw err;
    }

    console.log("Finished writing to file");

}));

console.log(colors);
