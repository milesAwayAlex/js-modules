// named imports are available from `module.exports`
import { name } from './c-cjs.js';
console.log(name);

// module.exports exported as the default export
import cjs from './c-cjs.js';
console.log(cjs);

// cjs module namespace can be imported using (or a dynamic import)
import * as m from './c-cjs.js';
console.log(m);
