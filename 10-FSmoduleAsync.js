// FS module for filesystem, asynchronous approach
// In asynchronous approach you can start next task right away while the other task is going on in the background
// That way is better because it isnt blocking other users using your application

const { readFile, writeFile } = require('fs');

// we need to provide callback, we run that callback when we are done
// like event listener on the button

console.log("Starting task...");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;
        writeFile('./content/resultAsync.txt', `Here is the result:\n${first}\n${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Done with the task");
        }); 
    });
});

console.log("Starting the next one");