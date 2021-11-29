// to demonsrate the difference between running a module directly
// and requiring it from a different file
require('./c-main-module.js');

// modules are cached after the first time they are loaded
// provided `require.cache` is not modified, multiple calls
// to `require('foo') will not cause the module code to be
// executed multiple times. This allows transitive dependencies
// to be loaded even when they would cause cycles.
require('./c-main-module.js');
