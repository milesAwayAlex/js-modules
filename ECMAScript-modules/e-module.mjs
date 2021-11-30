import module from 'module';

// builtinModules - a list of modules provided by Node
console.log(module.builtinModules);

// createRequire - accepts a URL, return the require function
const require = module.createRequire(import.meta.url);
// example use - load a JSON in ESM
const json = require('./d-json-in-esm.json');
console.log(json);
