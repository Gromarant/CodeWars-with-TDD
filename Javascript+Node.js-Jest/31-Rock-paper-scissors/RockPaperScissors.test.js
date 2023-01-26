const RockPaperScissors = require('./RockPaperScissors.js');

describe('RockPaperScissors', () => { 

    test('should return "Draw!" when player 1 and player 2 are the same', () => {
        const expected = 'Draw!';
        const result = RockPaperScissors('scissors', 'scissors');
        expect(result).toStrictEqual(expected);
    });

    test('should return "Player 1 won!" when player 1 has "scissors" and  player 2 has "paper" ', () => {
        const expected = 'Player 1 won!';
        const result = RockPaperScissors('scissors', 'paper');
        expect(result).toStrictEqual(expected);
    });
    
    test('should return "Player 1 won!" when player 1 has "paper" and  player 2 has "rock" ', () => {
        const expected = 'Player 1 won!';
        const result = RockPaperScissors('paper', 'rock');
        expect(result).toStrictEqual(expected);
    });
    
    test('should return "Player 1 won!" when player 1 has "rock" and  player 2 has "scissors" ', () => {
        const expected = 'Player 1 won!';
        const result = RockPaperScissors('rock', 'scissors');
        expect(result).toStrictEqual(expected);
    });

    test('should return "Player 2 won!" when player 2 has win over  player 1 ', () => {
        const expected = 'Player 2 won!';
        const result = RockPaperScissors('scissors', 'rock');
        expect(result).toStrictEqual(expected);
    });
 })