/**
 * the file extension must be provided when using
 * `import` to resolve relative or absolute specifiers
 *
 * directory index ('./dir/index.js') must also be fully specified
 *
 * ES Modules are resolved and cached as URLs - `file:`, `node:`, and `data:`
 * are supported natively
 *
 * Modules are loaded multiple times if the `import` specifier
 * has a different query or fragment. It is recommended to use
 * `url.pathToFileURL` when importing a path
 */

import { pathToFileURL } from 'url';

const pathURL = pathToFileURL('./a-basic-export.mjs');

console.log(pathURL);

/**
 * `node:` specifiers are an alternative way to load node built-in modules
 */
import { pathToFileURL } from 'node:url';
