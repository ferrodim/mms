
const isLosePosition = require('./isLosePosition');

// isLosePosition('1,3,3'); // false
// isLosePosition('1,4,4'); // false

// let ans = isLosePosition('7,10,3,9'); // false
// let ans = isLosePosition('7,10,3,9,12'); // false
let ans1 = isLosePosition('1,2,4'); // false
console.log('ans1', ans1);
let ans2 = isLosePosition([1,2,4]); // false
console.log('ans2', ans2);
//console.log('a', a);
