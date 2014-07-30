var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
};

Dancer.prototype.step = function() {
  var self = this;
  setTimeout(function() {
    self.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  if(top < 0) {
    top = 0;
  }
  if(top > $('body').height()) {
    top = $('body').height() - 50;
  }

  if(left < 0) {
    left = 0;
  }
  if(left > $('body').height()) {
    left = $('body').height() - 50;
  }

  this.top = top;
  this.left = left;
  
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  this.setPosition(this.top, 100);
};
