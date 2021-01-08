
$("#lavori").click(function(){
  $("#successivo").addClass("visible");
  $("#defaultCanvas0").css({"filter":"blur(4px)"});
});



$("#invertcolors").click(function(){
  $("body").toggleClass("filtroinverted");   
});



$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(" #lavori, .progettosingolo").length) {
    $("body").find("#successivo").removeClass("visible");
    $("body").find("#defaultCanvas0").css({"filter":"none"});
  }
});


