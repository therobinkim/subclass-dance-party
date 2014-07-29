var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype._dancerStep = Dancer.prototype.step;
BlinkyDancer.prototype.step= function(){
  this._dancerStep();
  this.$node.toggle();
}
