/*  Table of Contents 
01. MENU ACTIVATION
02. MOBILE NAVIGATION ACTIVATION
03. FLEXSLIDER LANDING PAGE
04. SCROLL TO TOP BUTTON
05. Registration Page On/Off Clickable Items
06. Product List and Grid View
*/

jQuery(document).ready(function($) {
	 'use strict';

/*
=============================================== 01. MENU ACTIVATION  ===============================================
*/
	 jQuery('nav#site-navigation-pro ul.sf-menu, nav#sidebar-nav ul.sf-menu').superfish({
			 	popUpSelector: 'ul.sub-menu, .sf-mega', 	// within menu context
	 			delay:      	200,                	// one second delay on mouseout
	 			speed:      	0,               		// faster \ speed
		 		speedOut:    	200,             		// speed of the closing animation
				animation: 		{opacity: 'show'},		// animation out
				animationOut: 	{opacity: 'hide'},		// adnimation in
		 		cssArrows:     	true,              		// set to false
			 	autoArrows:  	true,                    // disable generation of arrow mark-up
		 		disableHI:      true,
	 });
	 
	 
	 
	 /* Sticky Landing Page Header */
	 $('header.sticky-header').scrollToFixed({
		 minWidth:768
	 });
	 
	 
	 /* Remove Fixed Heading on Mobile */
 	$(window).resize(function() {
 	   var width_progression = $(document).width();
 	      if (width_progression < 768) {
			  $('header.sticky-header').trigger('detach.ScrollToFixed');
		  }
 	}).resize();
	 
	 /* Sitcky Video Sidebar */
	 $('nav#sidebar-nav.sticky-sidebar-js').hcSticky({
		 top:0
	 });
	 
 /*---slide toggle activation---*/
 $('.mini_cart_wrapper > a').on('click', function(event){
	if($(window).width() < 991){
		$('.mini_cart').slideToggle('medium');
	}
});	 
	 
/*
=============================================== 02. MOBILE NAVIGATION ACTIVATION  ===============================================
*/
 	$('#mobile-bars-icon-pro').click(function(e){
 		e.preventDefault();
 		$('#mobile-navigation-pro').slideToggle(350);
 		$("header#masthead-pro").toggleClass("active-mobile-icon-pro");
		$("header#videohead-pro").toggleClass("active-mobile-icon-pro");
 	});
	
	
   	$('ul#mobile-menu-pro').slimmenu({
   	    resizeWidth: '90000',
   	    collapserTitle: 'Menu',
   	    easingEffect:'easeInOutQuint',
   	    animSpeed:350,
   	    indentChildren: false,
   		childrenIndenter: '- '
   	});
	 
/*
=============================================== 03. FLEXSLIDER LANDING PAGE  ===============================================
*/
     $('.fam-slider').flexslider({
 		slideshow: true,  		/* Autoplay True/False */
 		slideshowSpeed: 8000,	/* Autoplay Speed */
 		animation: "fade",		/* Slideshow Transition Animation */
 		animationSpeed: 800, 	/* Slide Transition Speed */
 		directionNav: true,		/* Left/Right Navigation True/False */
 		controlNav: true,		/* Bullet Navigaion True/False */
 		prevText: "",
 		nextText: "",
     });	 

	 	 
/*
=============================================== 04. SCROLL TO TOP BUTTON  ===============================================
*/
	 
   	// browser window scroll (in pixels) after which the "back to top" link is shown
   	var offset = 150,
  	
 	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
   	offset_opacity = 1200,
  	
 	//duration of the top scrolling animation (in ms)
   	scroll_top_duration = 700,
  	
 	//grab the "back to top" link
   	$back_to_top = $('#pro-scroll-top');

 	//hide or show the "back to top" link
 	$(window).scroll(function(){
   		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
   		if( $(this).scrollTop() > offset_opacity ) { 
   			$back_to_top.addClass('cd-fade-out');
   		}
   	});

 	//smooth scroll to top
 	$back_to_top.on('click', function(event){
 		event.preventDefault();
 		$('body,html').animate({ scrollTop: 0 , }, scroll_top_duration
 	);
 	});


/*
=============================================== 05. Registration Page On/Off Clickable Items  ===============================================
*/
	
	$("ul.registration-invite-friends-list li").click(function() { 
	    $(this).closest("ul.registration-invite-friends-list li").toggleClass("active");
	});
	
	$("ul.registration-genres-choice li").click(function() { 
	    $(this).closest("ul.registration-genres-choice li").toggleClass("active");
	});



	

	 	 
});

/*
=============================================== 06. Quantity Increment  ===============================================
*/
$(document).ready(function(){

	var quantitiy=0;
	   $('.quantity-right-plus').click(function(e){
			
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			var quantity = parseInt($('#quantity').val());
			
			// If is not undefined
				
				$('#quantity').val(quantity + 1);
	
			  
				// Increment
			
		});
	
		 $('.quantity-left-minus').click(function(e){
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			var quantity = parseInt($('#quantity').val());
			
			// If is not undefined
		  
				// Increment
				if(quantity>0){
				$('#quantity').val(quantity - 1);
				}
		});
		
	});
/*
=============================================== 06. Product List and Grid View  ===============================================
*/

	$(document).ready(function() {
		$('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
		$('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
	});