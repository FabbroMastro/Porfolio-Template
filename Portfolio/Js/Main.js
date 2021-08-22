//Loader
	
    $(document).ready(function() {
		setTimeout(function(){
		$(".pageloader").remove();
		},1000); 
    });

// 
$(document).ready(function () {
   $(".menu-icon").on("click", function () {
     $("nav ul").fadeToggle();
   });
 });

 // navbar effetto cambio colore
 $(window).on("scroll", function () {
   if ($(window).scrollTop() > 100) {
     $('nav').addClass('black');
     $('nav ul li a').addClass('white');
   } else {
     $('nav').removeClass('black');
     $('nav ul li a').removeClass('white');
   }
 });
//Conocimientos informaticos animation
$(document).ready(function(){
  $(".flip").click(function(){
    $(".pannel").slideToggle("slow");
  });
});
//CAROUSEL SET
$(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 40,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  1050: {
                    items: 3
                  }
                }
              })
            })

//News Code

$("#1").click(function(){
	$('*[data-news="1"]').fadeToggle("slow");
});

$("#2").click(function(){
	$('*[data-news="2"]').fadeToggle("slow");
});

$("#3").click(function(){
	$('*[data-news="3"]').fadeToggle("slow");
});