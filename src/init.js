$(document).ready(function() {
  window.dancers = [];
  $('.lineUp').on('click', function() {
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('mouseenter', '.blinky', function() {
    var max = 100;
    var border = $(this).css('border').split('px');
    var num = parseInt(border[0]) * 2;
    if(num < max) {
      border[0] = num;

      var newTop = $(this).css('top');
      newTop = parseInt(newTop) - num/2;

      var newLeft = $(this).css('left');
      newLeft = parseInt(newLeft) - num/2;

      $(this).css({top: newTop, left: newLeft});
      $(this).css('border', border.join('px'));
      $(this).css('border-radius', num + 'px');
    }
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the 'data-dancer-maker-function-name' attribute of a
     * class='addDancerButton' DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});
