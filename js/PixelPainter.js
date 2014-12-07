//create 2 divs
//create grids 10 x 10

$(document).ready(function(){
  console.log("ready!");  
  $('body').append("<div class='colorPalette red'>content</div>");
  $('body').append("<div class='colorPalette green'>content</div>");
  $('body').append("<div class='colorPalette blue'>content</div>");
  $('body').append("<div class='colorPalette purple'>content</div>");
  $('body').append("<div class='colorPalette pink'>content</div>");
  $('body').append("<div class='colorPalette yellow'>content</div>");
  $('body').append("<div class='colorPalette orange'>content</div>");
  $('body').append("<div class='colorPalette brown'>content</div>");
  $('body').append("<div class='colorPalette gray'>content</div>");
  $('body').append("<div class='colorPalette black'>content</div>");
  $('body').append("<hr></hr>");


  var color = null;

  $('body').on("click", '.colorPalette', function() {
    color = $(this).css("background-color");
    console.log(color);
  });

  $('body').on("click", '.square', function() {
    $(this).css("background-color", color);
  }); 

  var grid = $("<div>");
  grid.addClass("grid");

  // artboard grid
  for(var i = 0; i < 11; i++){
    var row = $("<div>");
    row.addClass("row");
    for(var j = 0; j < 11; j++){
      var square = $("<div>");
      square.addClass("square");
      row.append(square);
    }//end of j
    grid.append(row);
  }//end of i

  $("#artboard").append(grid);

  //controls grid
  var rainbow = $("<div>");
  rainbow.addClass("rainbow");

  for(var k = 0; k < 4; k++) {
    var row = $("<div>");
    row.addClass("row");
    for(var l = 0; l < 4; l++) {
      var block = $("<div>");
      block.addClass("block");
      row.append(block);
    }//end of l
    rainbow.append(row);
  }//end of k

  $("#controls").append(rainbow);


// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);

}); //end of document.ready