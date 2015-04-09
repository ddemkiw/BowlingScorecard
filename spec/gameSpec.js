describe('Game', function(){

  var game;

  beforeEach(function() { 
    game = new Game();
  });

  describe('to start', function(){

    it('should have a score of 0', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('should have empty rolls', function(){
      expect(game.rounds.length).toEqual(10);
    });
  });

  // describe('during game', function(){

  //   it('the score should go up', function(){
  //     game.roll(3);
  //     game.score();
  //     expect(game.totalScore).toEqual(3);
  //   });

  //   it('should recognize a strike', function(){
  //     game.roll(10);
  //     expect(game.isStrike(0)).toBe(true);
  //   });

  //   it('should recognize a spair', function(){
  //     game.roll(3);
  //     game.roll(7);
  //     game.roll(2);
  //     expect(game.isSpair(0)).toBe(true)
  //   });
  // });

  // describe('with no spairs or strikes', function(){

  //   it('hitting 1 pin a turn should return a score of 20', function(){
  //     var i = 0;
  //     for(i = 0; i < 20; i++){
  //        game.roll(1);
  //      };
  //     game.score();
  //     expect(game.totalScore).toEqual(20);
  //   });
  // });

  // describe('has a bunch of crazy rules',function(){

  //   it('for strikes rolling 10, 7, 2 should have a score of 28', function(){
  //     game.roll(10);
  //     game.roll(7);
  //     game.roll(2);
  //     game.score();
  //     expect(game.totalScore).toEqual(28);
  //   });

  //   it('for spairs rolling 7,3,3,7 should equal 23',function(){
  //     game.roll(7);
  //     game.roll(3);
  //     game.roll(3);
  //     game.roll(7);
  //     game.score();
  //     expect(game.totalScore).toEqual(23);
  //   });

  //   it('5 strikes in a row plus two gutter balls scores 120',function(){
  //     game.roll(10);
  //     game.roll(10);
  //     game.roll(10);
  //     game.roll(10);
  //     game.roll(10);
  //     game.score();
  //     expect(game.totalScore).toEqual(120);
  //   });

  //    it('4,4,1,1 should equal 8',function(){
  //     game.roll(2);
  //     game.roll(4);
  //     game.roll(1);
  //     game.roll(1);
  //     game.score();
  //     console.log(game.totalScore)
  //     expect(game.totalScore).toEqual(8);
  //   });
  // });
});