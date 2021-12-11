
// const test = require('jest');
const isLosePosition = require('./isLosePosition');

test('simple positions', () =>{
   expect(isLosePosition([1])).toBe(true);
   expect(isLosePosition([1,1])).toBe(false);
   expect(isLosePosition([1,1,1])).toBe(true);
   expect(isLosePosition([1,1,1,1])).toBe(false);
   expect(isLosePosition([1,1,1,1,1])).toBe(true);

   expect(isLosePosition([2,2])).toBe(true);
   expect(isLosePosition([3,3])).toBe(true);
   expect(isLosePosition([4,4])).toBe(true);
   expect(isLosePosition([5,5])).toBe(true);
   
   expect(isLosePosition([3,2,1])).toBe(true);
});
