$(document).ready(function(){
  $(".text").hide();
  $("#ExpandAll").click(function(){
    $(".text").slideDown("slow");
  });
  $("#CloseAll").click(function(){
    $(".text").slideUp("slow");
  });

  $("#TextBig").click(function(){
    $(".text, .Headtext").css("font-size", '30px');
  });
  $("#TextSmall").click(function(){
    $(".text, .Headtext").css("font-size", '16px');
  });
});
