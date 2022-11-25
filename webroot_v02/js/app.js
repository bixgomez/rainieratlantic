import { foo, bar } from "./config.js"
import { foo, fooSet } from "./foo.js"
import { barSet } from "./bar.js"

fooSet();
barSet();

console.log(foo);
console.log(bar);

// import { createLayout } from "./layout.js";
// import { createDirectionals } from "./directionals.js";
// import { placeContent } from "./content.js";
//
// createLayout();
// createDirectionals();
