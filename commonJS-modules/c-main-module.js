// When a file is run from Node directly, require.main is set to module.
// if run with `node c-main-module.js` this will be true:
console.log(require.main === module);

// if run with `require('./c-main-module.js'), ^ will be false

// an entry point of the current app can obtained by checking require.main.filename
console.log(require.main);
console.log(module);
