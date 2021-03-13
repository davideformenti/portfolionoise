
$("#lavori").click(function(){
  $("#successivo").addClass("visible");
  $("#defaultCanvas0").addClass("blur");
  $("#invertcolors").addClass("blur");
});

$("#about").click(function(){
  $("#aboutmodal").addClass("visible");
  $("#defaultCanvas0").addClass("blur");
  $("#invertcolors").addClass("blur");
});



$("#invertcolors").click(function(){
  $("#defaultCanvas0").toggleClass("filtroinverted");   
  $(".contenitorebottoni").toggleClass("filtroinverted");   
  $("#invertcolors").toggleClass("filtroinverted");   
  $(".listalavori").toggleClass("filtroinverted");   
  $(".thumbproject").toggleClass("filtroinverted");   
  $("#nome").toggleClass("filtroinverted");   
  $("#motto").toggleClass("filtroinverted");   
  $(".label").toggleClass("filtroinverted");   
  $("#aboutmodalinside").toggleClass("filtroinverted");   
});



$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(" #lavori, .progettosingolo, #about, .listalavori").length) {
    $("body").find("#successivo").removeClass("visible");
    $("body").find("#aboutmodal").removeClass("visible");
    $("body").find("#defaultCanvas0").removeClass("blur");
    $("body").find("#invertcolors").removeClass("blur");

    
  }
/*   if (!$(event.target).closest(" #lavori, .progettosingolo, ").length) {
     $("body").find("#defaultCanvas0").css({"filter":"none"});
    $("body").find("#invertcolors").css({"filter":"none"});

    
  } */
});


$("#descrizione").click(function(){
  $("#dettagli").addClass("visible");
});


$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(" #descrizione, #dettagli").length) {
    $("body").find("#dettagli").removeClass("visible");
  }
});

var divs = $('#list_1 li');
console.log(divs.length);
console.log(divs);
var docHeight = $(document).height(),
        docWidth = $(document).width(),
        divWidth = divs.width(),
        divHeight = divs.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;
var resto
for (var i=0; i<divs.length; i++ ){
  resto=i%2;
   if(resto==0){
    $(divs[i]).css("position", "absolute");
   
    $(divs[i]).css({
      left: Math.floor( Math.random(1,3) * widthMax ),
      top: Math.floor( Math.random(1,3) * heightMax )
  });
  } 
  else{
    $(divs[i]).css("position", "absolute");
      
    $(divs[i]).css({
      right: Math.floor( Math.random(1,3) * widthMax ),
      bottom: Math.floor( Math.random(1,3) * heightMax )
  });
  }
}


/* var links = $('#elements div a'); */


/* 


$('.list-item-progetto').click(function() {
  var docHeight = $(document).height(),
      docWidth = $(document).width(),
      $div = $('.list-item-progetto'),
      divWidth = $div.width(),
      divHeight = $div.height(),
      heightMax = docHeight - divHeight,
      widthMax = docWidth - divWidth;
  
  $div.css({
      left: Math.floor( Math.random() * widthMax ),
      top: Math.floor( Math.random() * heightMax )
  });
}); */


 $( function() {
  $( ".list-item-progetto" ).draggable();
} ); 

