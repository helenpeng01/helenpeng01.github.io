$(document).ready(function() {

 $("#one").draggable();

  $("#ohgod").draggable();

 $("#one").click(function(){
 $("#two").show()
 });

 $("#ohgod").hover(function(){
 $("#ohgod").css("color", "white");
 });

 $("#ohgod").click(function(){
 $("#thinking").show()
 });


 $("#thinking").hover(function(){
 $("#thinking").css("color", "white");
 });

 $("#thinking").click(function(){
 $("#home").show()
 });



   })
