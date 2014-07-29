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

SpaceInvaderDancer.prototype._oldStep = Dancer.prototype.step;
SpaceInvaderDancer.prototype.step = function(){
  this._oldStep();

  //Explodes

  //When does it animate
  //In what ways does it animate
  //first we animate
  //update the top and left
  if(this._even){
    if(this.left < this.base+300){
      this.left+=100;
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
