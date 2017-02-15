$( document ).ready(function() {

  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Blue']; // colors to use later

  // loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
    // adding a new block
    var newColorBlock = $('<div>'); // create an empty div - not added to page yet
    newColorBlock.css('background-color', colorArray[i]); // adds a color to the empty div (the ith color)
    newColorBlock.addClass('colorBlock'); // this line adds class from css to assign height and width
    newColorBlock.data('colorOfBlock', colorArray[i]);
    $('#colorBlockContainer').append(newColorBlock); // Add the div to the DOM
}

  $('#colorBlockContainer').on('click', '.colorBlock', function() { //event listener for colorblock click
    console.log('($this).data().colorOfBlock: ', $(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if(randomColor == colorOfBlockSelected) {
      $('#responseSection').text('Yep!');
    } else {
      $('#responseSection').text('Nah.');
    }
    
  });
  // Select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length - 1) //get random number from 0 through 4 (for now)
  var randomColor = colorArray[randomNumberSelected]; // uses random number selected (0-4), to pick a color from array
  $('#userColorPrompt').text(randomColor);
});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
