let game = require('./game');

test('Game basics', ()=>{
   expect(game(1, [1])).toBe('Ельф');
   expect(game(1, [2])).toBe('Олень');
   expect(game(5, [7,10,3,9,12])).toBe('Олень');
});
