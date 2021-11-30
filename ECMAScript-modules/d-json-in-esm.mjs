// local JSON files can be loaded with fs
import { readFile } from 'fs/promises';

const url = new URL('./d-json-in-esm.json', import.meta.url);
const json = JSON.parse(await readFile(url));

console.log(url);

console.log(json.says);

console.log(import.meta);
