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
      game.score();
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
      game.score();
      expect(game.totalScore).toEqual(20);
    });
  });

  describe('has a bunch of crazy rules',function(){

    it('for strikes rolling 10, 7, 2 should have a score of 28', function(){
      game.roll(10);
      game.roll(7);
      game.roll(2);
      game.score();
      expect(game.totalScore).toEqual(28);
    });

    it('for spairs rolling 5,5,3,2 should equal 18',function(){
      game.roll(5);
      game.roll(5);
      game.roll(3);
      game.roll(2);
      game.score();
      expect(game.totalScore).toEqual(18);
    });

    it('5 strikes in a row plus two gutter balls scores 120',function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      game.score();
      expect(game.totalScore).toEqual(120);
    });
  });
});