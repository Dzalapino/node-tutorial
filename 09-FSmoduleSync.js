// FS module for filesystem, synchronous approach
// In synchronous approach the app will wait for the filesystem task to end before doing other tasks
// So if one user is making long fs task, another users wont be able to use the application
// Everything is happening line by line

const { readFileSync, writeFileSync } = require('fs');

console.log("Starting the task...");

// synchronous fs for file reading
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// synchronous fs for file writing
// by default writeFileSync() will override the data
// as we added flag: a, now it will append the data
writeFileSync('./content/resultSync.txt', `Here is the result:\n${first}\n${second}`, { flag: 'a'});

console.log("Done with the task");
console.log("Starting the next one");