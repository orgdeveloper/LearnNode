const cp = require('child_process');

cp.exec("open -a Terminal .", (err, data, stderr) => {
    if(err){
        throw err;
    }
    console.log(data);
});
