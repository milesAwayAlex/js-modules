(function (exports, require, module, __filename, __dirname) {
  // Module code lives here
  /**
   * exports - a reference to module.exports;
   *
   * module - a reference to the current module
   *
   * require - used to import modules, JSON, and local files
   *
   */
});

// require.resolve returns the resolved filename without loading the module
console.log(require.resolve('./c-main-module.js'));

const e = require('./e-module-exports.js');

e.on('ready', () => {
  console.log('module "e" is ready');
});

console.log(e.hello);
