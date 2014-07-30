/*
A dancer that grows bigger and gets smaller
//// (subclass) BlowfishDancer
////normally pulses between two small sizes
////on hover explodes from dance floor
Every step he changes to some size
*/

var SpaceInvaderDancer = function(top, left, timeBetweenSteps){
  var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  var cssColor = {background: randColor};
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('space');
  this._even = true;
  this.base = left;
  this.$node.css(cssColor);
  this.strafeTime = Math.random()*300;
}

SpaceInvaderDancer.prototype = Object.create(Dancer.prototype);
SpaceInvaderDancer.prototype.constructor = SpaceInvaderDancer;

SpaceInvaderDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

/*
  Get the window.dancers
  for each dancer
    get their top and left positions
    calculate the distance from this dancer to the other dancer
      if distance is less than x
        move down by x
*/
  var getClosest = function (){
    //Get dancers
    for(var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      if(dancer !== this){
        var dancerTop = dancer.top;
        var dancerLeft = dancer.left;

        //do stuff to calculate distance
        var dist = distance(this.top, this.left, dancerTop, dancerLeft);
        console.log(dist);
        if(dist < 100){
          this.setPosition(this.top + 100, this.left);
        }
        function distance(myTop, myLeft, oTop, oLeft){
          var result = Math.pow(myTop - oTop, 2) + Math.pow(myLeft - oLeft, 2);
          return Math.sqrt(result);
        }
      }
    }
  };

  getClosest.call(this);
  
  if(this._even){
    if(this.left < this.base + 300){
      this.left += 100;
    } else{
      this._even = false;
    }
  } else {
    this.left-=100;
    if(this.left <= this.base){
      this._even = true;
    }
  }

  $(this.$node).animate({left:this.left}, this.strafeTime);
}
