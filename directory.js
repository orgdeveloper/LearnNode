const fs = require("fs");


if(fs.existsSync('./storage-files')){
    console.log("Directory already exists");
    process.exit();
}
else{
    fs.mkdir("storage-files", (err) => {
        if(err){
            throw err;
        }
        console.log("Folder created!")
    });
}

