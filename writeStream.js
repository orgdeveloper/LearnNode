const fs = require('fs');


const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8');

// process.stdout.write("Hello what am I doing ?!\n");
// writeStream.write("Hello what am I doing ?!\n");
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');



// readStream.on("data", (data)=>{
//     writeStream.write(data, 'UTF-8',(error => {
//         if(error){
//             throw error;
//         }
//         console.log('Sending to file!')
//     }))
// })

process.stdin.pipe(writeStream);
