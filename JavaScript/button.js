$(document).ready(function(){
  $("button").mouseenter(function(){
    $(this).animate({
      backgroundColor: 'green';
    }, 500);
  });
  $("button").mouseleave(function(){
    $(this).animate({
      backgroundColor: 'red';
    }, 500);
  });
});
