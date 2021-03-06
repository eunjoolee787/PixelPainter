//create 2 divs
//create grids 10 x 10

$(document).ready(function(){
  console.log("ready!"); 
  var colors = ["red", "green", "blue", "purple", "pink", "yellow", "orange", "brown", "gray", "black", "LimeGreen", "Maroon", "MediumOrchid", "MediumSeaGreen", "PaleVioletRed", "PowderBlue"];
  // $('body').append("<hr></hr>");
  $("p:eq(1)").removeClass();
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
  var i = 0;

  for(var k = 0; k < 4; k++) {
    var row = $("<div>");
    row.addClass("row");
    for(var l = 0; l < 4; l++) {
      var block = $("<div>");
      block.addClass("block");
      block.addClass("colorPalette");
      block.addClass(colors[i++]);
      row.append(block);
    }//end of l
    rainbow.append(row);
  }//end of k

  var erase = $("<div>");
  erase.addClass("erase");
  rainbow.append(erase);
  erase.text("erase");
  erase.click(function() {
    color = "#fff";
  });


  var clear = $("<div>");
  clear.addClass("clear");
  rainbow.append(clear);
  clear.text("clear");
  clear.click(function() {
    $('.square').css("background-color", "#fff");
  });

  $("#controls").append(rainbow);

// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);

}); //end of document.ready