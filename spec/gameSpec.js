describe('Game', function(){

  var game

  beforeEach(function() { 
    game = new Game();
  });

  describe('starting the game', function(){

    it('it should have a score of 0', function(){
      expect(game.rounds).toEqual([{ score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 }, { score1: 0, score2: 0 } ]);
    });
  });

  describe('during regular round', function(){

    it('it can record score per round', function(){
      game.roll(0, 2, 3)
      game.roll(0,2,3)
      expect(game.score()).toEqual(6)
    });

  });

  describe('during a round with a strike', function(){

    it('it can record score per round', function(){
      game.roll(0, 1, 10)
      game.roll(1,1,2)
      game.roll(1,2,2)
      expect(game.score).toEqual(3)
    });

  });

});