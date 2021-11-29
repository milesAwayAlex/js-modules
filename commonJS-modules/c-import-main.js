// to demonsrate the difference between running a module directly
// and requiring it from a different file
require('./c-main-module.js');

// Modules are cached after the first time they are loaded
// provided `require.cache` is not modified, multiple calls
// to `require('foo') will not cause the module code to be
// executed multiple times. This allows transitive dependencies
// to be loaded even when they would cause cycles.
// This does not execute the code for the second time:
require('./c-main-module.js');

// Modules are cached based on their resolved filname.
// If the resolved filename is different (e.g. called from a
// different location or, on case-insensitive systems, with
// a different case) the returned object will be different.
