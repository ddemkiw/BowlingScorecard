describe('Game', function(){

  var game

  beforeEach(function() { 
    game = new Game();
  });

  describe('starting the game', function(){

    it('it should have a score of 0', function(){
      game.startingScore();
      expect(game.rounds).toEqual([ { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 } ]);
    });
  });

});