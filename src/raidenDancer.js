// subclass of blinkyDancer
// but also moves
// when blink,
  // top & left changes
  // max top, max left (+/-)
  // blink back on

// inherits everything else


var RaidenDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this._isShowing = true;
  this._img = {
    standing: "http://www.mortalkombatwarehouse.com/mk2/raiden/sprites/stance/a1.gif",
    dizzy: "http://www.mortalkombatwarehouse.com/mk2/raiden/sprites/dizzy/a1.gif"
  };
  this.$node = $('<img class="dancer raiden" src='+ this._img.standing+ '>');
  this.$node.addClass('raiden');
};

RaidenDancer.prototype = Object.create(BlinkyDancer.prototype);
RaidenDancer.prototype.constructor = RaidenDancer;

RaidenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if(this._isShowing) {
    // toggle this._isShowing
    $(this.$node).fadeOut();
    this._isShowing = false;
  } else {
    // update top, left
    // run setPosition(top, left)
    var oldTop = this.top;
    var oldLeft = this.left;
    var newTop = oldTop + (Math.random() * 200) - 100;
    if(newTop < 0) {
      newTop = 0;
    }
    if(newTop > $('body').height()) {
      newTop = $('body').height() - 50;
    }
    var newLeft = oldLeft + (Math.random() * 200) - 100;
    if(newLeft < 0) {
      newLeft = 0;
    }
    if(newLeft > $('body').height()) {
      newLeft = $('body').height() - 50;
    }
    this.setPosition(newTop, newLeft);
    // toggle this._isShowing
    $(this.$node).show();
    this._isShowing = true;
  }
  this.$node.toggle();
};
RaidenDancer.prototype._oldLineUp = BlinkyDancer.prototype.lineUp;
RaidenDancer.prototype.lineUp = function(){
  this._oldLineUp();
  this.$node.attr('src', this._img.dizzy);

  // makes Raiden Dancer not move
  /*
  var raidenStep = this.step;
  this.step = function() {
    this._dancerStep();
  };*/

  var self = this;
  setTimeout(function(){  
      self.$node.attr('src', self._img.standing);
      //self.step = raidenStep;
  }, 5000);
}
