/**
 * There are three ways to enable ESM in Node:
 *  - .mjs file extension
 *  - "type": "module" in package.json
 *  - flag --input-type=module
 */
import { addTwo } from "./a-basic-export.mjs";

console.log(addTwo(5));
