console.log("Hi Demkiw!");

var game = new Game();

var numberOfFrames = 10;

$(document).ready(function(){
  buildFrames();
  setFrameLitseners();
});

var setFrameLitseners = function(){
  var i = 0;
  while(i < numberOfFrames){
    $('#first-box'+ i).on('input',function(e){
      pushNewScore($(this));
      });
    $('#second-box'+ i).on('input',function(e){
      pushNewScore($(this));
      });
    i++;
  }
};

var pushNewScore = function(newScore){
  var targetFrame;
  // I put this in very last minute! look up js string 'split' method
  // we get the id from the input element, so we know which box we've got
  var boxId = newScore.attr('id');
  var roundNumber = boxId.split('box')[1];
  var box = whichBox(boxId);
    game.roll(roundNumber, box, newScore.val());
    var totalScore = game.score();
  // todo: it would be great to be able to update more than one score here!
  // but for now, we just need the round number, and we can use the return value from game.score (var totalScore)

targetFrame = roundNumber;
$("#score" + targetFrame).text(totalScore);

};
  

var buildFrameUnit = function(frameNumber){
  var frameDiv = document.createElement('div');
    $(frameDiv).addClass('frame').attr('id', frameNumber).appendTo($('#frame-holder'));
    $form = $("<form></form>");
    $form.append('<input type="text" id="second-box' + frameNumber + '" class="second-roll">');
    $form.append('<input type="text" id="first-box' + frameNumber + '" class="first-roll">');
    $(frameDiv).append($form);
    $(frameDiv).append('<p class="score" id="score'+frameNumber +'">??</p>')
};

var buildFrames = function(){
  var i = 0;
  while(i < numberOfFrames){
    buildFrameUnit(i);
    i++;
  }
};

var whichBox = function(id){ 
  return id.indexOf('first') === 0 ? 0 : 1
};




