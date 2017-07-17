$(document).ready(function(){
  $('.menu_icon').click(function(){
$('.menu_icon').animate({left: '5px'},'slow');
    $('#nav_side').toggle('slow');
  });
});


$(document).ready(function() {
  $('#li1').mouseover(function() {
    $('#li1').css('background-color','#d9d9d9');
  });
  $('#li1').mouseout(function(){
    $('#li1').css('background-color','#e6e6e6');
  })
});


$(document).ready(function() {
  $('#li2').mouseover(function() {
    $('#li2').css('background-color','#d9d9d9');
  });
  $('#li2').mouseout(function(){
    $('#li2').css('background-color','#e6e6e6');
  });
});

$(document).ready(function() {
  $('#li3').mouseover(function() {
    $('#li3').css('background-color','#d9d9d9');
  });
  $('#li3').mouseout(function(){
    $('#li3').css('background-color','#e6e6e6');
  });
});
