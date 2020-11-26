$(document).ready(function() {
//alert("woof");
  $("#words").draggable();

$("#word3").hover(function(){
  $("#word2").show();
    	});

$("#word4").click(function(){
       $("#word5").hide();
       });

       $("#word4").hover(function(){
           $("#word2").css("color", "white");
               });

               $("#words").hover(function(){
         $("#word3").append("ring");
         $("#word3").css("color", "white")
         });
  })
