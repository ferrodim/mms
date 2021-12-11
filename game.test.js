let game = require('./game');

test('Game basics', ()=>{
   expect(game(1, [1])).toBe('Ельф');
   expect(game(1, [2])).toBe('Олень');
});
