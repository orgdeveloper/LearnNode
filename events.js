const events = require('events');

const emitter = new events.EventEmitter();


emitter.on('customEvent', (message, user) => {
    console.log(`user ${user} said ${message}`);
});

// emitter.emit('customEvent', 'Hello, random event being passed!', 'computer');
// emitter.emit('customEvent', 'Cool?', 'Martyn');


process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input === "exit")
    {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
})
