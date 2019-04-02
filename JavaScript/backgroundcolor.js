$(document).ready(function(){
  $("#white").click(function(){
    $("body").animate({
      backgroundColor: 'white'
    }, 1000);
  });
  $("#blue").click(function(){
    $("body").animate({
      backgroundColor: '#E6FFFF'
    }, 1000);
  });
  $("#yellow").click(function(){
    $("body").animate({
      backgroundColor: '#FFFFE6'
    }, 1000);
  });
});


/*
function changebackgroundcolor1(){
      document.body.style.background = "#FFFFFF";
}
function changebackgroundcolor2(){
      document.body.style.background = "#FFFFCC";
}
function changebackgroundcolor3(){
      document.body.style.background = "#CCFFFF";
}
*/
