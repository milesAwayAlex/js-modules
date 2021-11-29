/**
 * to change the exports object, the new object
 * should be assigned to module.exports
 */

const EventEmitter = require('events');

module.exports = new EventEmitter();

// do something, then emit the 'ready' event
// from the module itself

setTimeout(() => {
  module.exports.emit('ready');
}, 333);

// exports is bound to module.exports initially
// so module.exports.x = ... can be written as
// exports.x = ...
// however, if a new value is assigned to exports,
// it is no longer bound to module.exports

module.exports.hello = true; // exported

exports = { hello: false }; // not exported, only available within the module

