$('.html').hide();
$('.CSS').hide();
$('.js').hide();

$('#btn1').click(function(){
 $('.html').show(1000);
 $('.CSS').hide();
 $('.js').hide();
})

$('#btn2').click(function(){
 $('.html').hide();
 $('.CSS').show(1000);
 $('.js').hide();
})

$('#btn3').click(function(){
 $('.html').hide();
 $('.CSS').hide();
 $('.js').show(1000);
})