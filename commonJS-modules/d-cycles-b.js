console.log('b starting');
exports.done = false;
// b, loaded from a, tries to load a back
// in order to prevent an infinite loop,
// an unfinished copy of object a is returned
const a = require('./d-cycles-a.js');
console.log('in b, a.done =', a.done);
exports.done = true;
// here, b is done and returned to a
console.log('b done');
