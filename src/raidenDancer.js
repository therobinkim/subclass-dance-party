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
  this.$node.addClass('raiden');
};

RaidenDancer.prototype = Object.create(BlinkyDancer.prototype);
RaidenDancer.prototype.constructor = RaidenDancer;

RaidenDancer.prototype.step = function() {
  this._oldStep();
  if(this._isShowing) {
    // toggle this._isShowing
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
    this._isShowing = true;
  }

  this.$node.toggle();
};
