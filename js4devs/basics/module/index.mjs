// amd
// define();
// require();

// commonjs
// module.exports
// require

// es module
// export
// import

import { klaus as hanspeter, lisa } from './module.mjs';
import PI from './module.mjs';
import User from './user.mjs';

console.log(hanspeter, lisa);

console.log(PI);

const klaus = new User();
console.log(klaus);
