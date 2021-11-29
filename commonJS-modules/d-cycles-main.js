// When there are circular `require()` calls, a module
// might not have finished when it is returned.

console.log('main starting');
// main loads a, a loads b, then b tries to load a
const a = require('./d-cycles-a.js');
const b = require('./d-cycles-b.js');
// by this point, both modules have finished loading
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
