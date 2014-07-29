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

// "actions" property
// obj
// keys: actionName
// value: new step function (unique per subclass)
// set step to default action
// actions.default = function () {...orig contents of Dancer.proto.step...}
// actions.old = function () {...orig contents of Dancer.proto.step...}

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  //do stuff
  this.setPosition(this.top, 100);
}

