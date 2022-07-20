$(document).ready(function(){

	// ANIMATION WOW CODE
	new WOW().init();

    // WOL CAROUSEL BY CLIENT REVIEW SECTION
    $('.owl-carousel').owlCarousel({
		margin: 15,
		items: 2,
		loop: true,
		autoplay: true,
		autoplayTimeou: 5000,
		responsiveClass: true,
		responsiveRefreshRate: true,
		responsive:{
			0:{
				items: 1
			},
			768:{
				items: 1
			},
            1050:{
				items: 2
			},
			1200:{
				items: 2
			},
			1920:{
				items: 2
			},
		}  		
	});

	// SCTICKY MENU 
	$(".js--sticky-menu").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});

	// PAGE UP SECTION
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#topBtn').fadeIn();
		}else{
			$('#topBtn').fadeOut();
		}
	  });
	
	  $("#topBtn").click(function(){
		$('html,body').animate({scrollTop: 0},900)
	 });

	 // SMOOTH SCROLL ROE IE/ EDGE/ SAFARI
	$("a").on('click', function(event){
		
		if(this.hash !== "") {
			event.preventDefault();
			
			var hash = this.hash;
			
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 300, function(){
				window.location.hash = hash;
			});
		}
	});

});

// PAGE LOADING SECTION
$(window).on('load', function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});
});

// MOBILE MENU
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

// MOUSE CARSOR SECTION
var cursor = $(".cursor"),
        follower = $(".follower");
		
	  var posX = 0;
	      posY = 0;
	  
	  var mouseX = 0;
	      mousey = 0;
	  
	  TweenMax.to({}, 0.020, {repeat: -1, onRepeat: function(){
	    posX +=(mouseX - posX) / 10;
	    posY +=(mouseY - posY) / 10;
		TweenMax.set(follower, {css:{left: posX - 5, top: posY -5 }});
		TweenMax.set(cursor, {css: {left: mouseX,top: mouseY}});
		}
	  });
	  
	  
	  $(document).on("mousemove", function(e){
	    mouseX = e.pageX;
	    mouseY = e.pageY;
	  });
	  
	  $("a").on("mouseenter", function(){
	    cursor.addClass("active");
		follower.addClass("active");
	  });
	  
	  $("a").on("mouseleave", function(){
	    cursor.removeClass("active");
		follower.removeClass("active");
});