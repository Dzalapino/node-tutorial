// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./03-firstModule');
const sayHi = require('./04-secondModule');
const data = require('./05-alternativeFlavor');

// When you import a module, you invoke it too!
require('./06-mindGrenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// Some built-in Modules:
// OS
// PATH
// FS
// HTTP