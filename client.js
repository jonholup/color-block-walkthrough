$( document ).ready(function() {

  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine']; // colors to use later

// loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
    // adding a new block
      var newColorBlock = $('<div>'); // create an empty div - not added to page yet
      newColorBlock.css('background-color', colorArray[i]); // adds a color to the empty div (the ith color)
      newColorBlock.addClass('colorBlock'); // this line adds class from css to assign height and width
      $('#colorBlockContainer').append(newColorBlock); // Add the div to the DOM
  }





});
