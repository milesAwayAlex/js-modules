/**
 * There are three ways to enable ESM in Node:
 *  - .mjs file extension
 *  - "type": "module" in package.json
 *  - flag --input-type=module
 */

// the file extension must be provided when using
// `import` to resolve relative or absolute specifiers
// directory index ('./dir/index.js') must also be fully specified
import { addTwo } from './a-basic-export.mjs';

console.log(addTwo(5));
