describe('Game', function(){

  var  game;

beforeEach(function() { game = new Game()});

  describe('to start', function(){


    it('should have a score of 0', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('should have 0 rolls', function(){
      expect(game.rolls).toEqual([]);
    });
  });

  describe('during game', function(){

    it('the score should go up', function(){
      game.roll(3);
      expect(game.totalScore).toEqual(3);
    });

    it('should recognize a strike', function(){
      game.roll(10);
      expect(game.isStrike(0)).toBe(true);
    });

    it('should recognize a spair', function(){
      game.roll(3);
      game.roll(7);
      game.roll(2);
      expect(game.isSpair(0)).toBe(true)
    });
  });

  describe('with no spairs or strikes', function(){

    it('hitting 1 pin a turn should return a score of 20', function(){
      var i = 0;
      for(i = 0; i < 20; i++){
         game.roll(1);
       };
      console.log(game.rolls)
      expect(game.totalScore).toEqual(20);
    });
  });
});