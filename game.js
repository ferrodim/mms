const isLosePosition = require('./isLosePosition');
const playerNames = ['Олень', 'Ельф'];
const firstPlayer = 0;
const secondPlayer = 1;

function game(n, a){
   let winner = isLosePosition(a) ? secondPlayer : firstPlayer;
   let winnerName = playerNames[winner];
   return winnerName;
}

module.exports = game;
