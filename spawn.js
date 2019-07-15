const cp = require('child_process');

const questionApp = cp.spawn('node', ["questions.js"]);


questionApp.stdin.write("Mar\n");
questionApp.stdin.write("Ro\n");
questionApp.stdin.write("Code\n");


questionApp.stdout.on("data", data => {
    console.log("from the app: " + data);
})


questionApp.on('close', () =>{
    console.log('App closed');
})
