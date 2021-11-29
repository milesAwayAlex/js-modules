console.log('a starting');
exports.done = false;
// a, loaded from main, loads b
const b = require('./d-cycles-b.js');
// here, b has finished loading, a has not
console.log('in a, b.done =', b.done);
exports.done = true;
// here, a is done and returned to main
console.log('a done');
