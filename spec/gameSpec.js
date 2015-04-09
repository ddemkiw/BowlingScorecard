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
      expect(game.rounds[0].score2).toEqual(3)
    });

     it('it can record pins knocked down for an entire game', function(){
      for(i=0; i<10; i++){
        game.roll(i,1,1);
        game.roll(i,2,1);
      }
      expect(game.score()).toEqual(20)
    });
  });

});