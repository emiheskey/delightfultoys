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

/*
=============================================== 07. Testimonials ===============================================
*/

$('.carousel-testimonial').owlCarousel({
	loop:true,
	autoplay: true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

/*
=============================================== 08. Price Range ===============================================
*/

$('.slider').each(function(e) {

    var slider = $(this),
        width = slider.width(),
        handle,
        handleObj;

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + width + ' 83');

    slider.html(svg);
    slider.append($('<div>').addClass('active').html(svg.cloneNode(true)));

    slider.slider({
        range: true,
        values: [1800, 7800],
        min: 500,
        step: 5,
        minRange: 1000,
        max: 12000,
        create(event, ui) {

            slider.find('.ui-slider-handle').append($('<div />'));

            $(slider.data('value-0')).html(slider.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('value-1')).html(slider.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('range')).html((slider.slider('values', 1) - slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));

            setCSSVars(slider);

        },
        start(event, ui) {

            $('body').addClass('ui-slider-active');

            handle = $(ui.handle).data('index', ui.handleIndex);
            handleObj = slider.find('.ui-slider-handle');

        },
        change(event, ui) {
            setCSSVars(slider);
        },
        slide(event, ui) {

            let min = slider.slider('option', 'min'),
                minRange = slider.slider('option', 'minRange'),
                max = slider.slider('option', 'max');

            if(ui.handleIndex == 0) {
                if((ui.values[0] + minRange) >= ui.values[1]) {
                    slider.slider('values', 1, ui.values[0] + minRange);
                }
                if(ui.values[0] > max - minRange) {
                    return false;
                }
            } else if(ui.handleIndex == 1) {
                if((ui.values[1] - minRange) <= ui.values[0]) {
                    slider.slider('values', 0, ui.values[1] - minRange);
                }
                if(ui.values[1] < min + minRange) {
                    return false;
                }
            }

            $(slider.data('value-0')).html(ui.values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('value-1')).html(ui.values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('range')).html((slider.slider('values', 1) - slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));

            setCSSVars(slider);

        },
        stop(event, ui) {

            $('body').removeClass('ui-slider-active');

            let duration = .6,
                ease = Elastic.easeOut.config(1.08, .44);

            TweenMax.to(handle, duration, {
                '--y': 0,
                ease: ease
            });

            TweenMax.to(svgPath, duration, {
                y: 42,
                ease: ease
            });

            handle = null;

        }
    });

    var svgPath = new Proxy({
        x: null,
        y: null,
        b: null,
        a: null
    }, {
        set(target, key, value) {
            target[key] = value;
            if(target.x !== null && target.y !== null && target.b !== null && target.a !== null) {
                slider.find('svg').html(getPath([target.x, target.y], target.b, target.a, width));
            }
            return true;
        },
        get(target, key) {
            return target[key];
        }
    });

    svgPath.x = width / 2;
    svgPath.y = 42;
    svgPath.b = 0;
    svgPath.a = width;

    $(document).on('mousemove touchmove', e => {
        if(handle) {

            let laziness = 4,
                max = 24,
                edge = 52,
                other = handleObj.eq(handle.data('index') == 0 ? 1 : 0),
                currentLeft = handle.position().left,
                otherLeft = other.position().left,
                handleWidth = handle.outerWidth(),
                handleHalf = handleWidth / 2,
                y = e.pageY - handle.offset().top - handle.outerHeight() / 2,
                moveY = (y - laziness >= 0) ? y - laziness : (y + laziness <= 0) ? y + laziness : 0,
                modify = 1;

            moveY = (moveY > max) ? max : (moveY < -max) ? -max : moveY;
            modify = handle.data('index') == 0 ? ((currentLeft + handleHalf <= edge ? (currentLeft + handleHalf) / edge : 1) * (otherLeft - currentLeft - handleWidth <= edge ? (otherLeft - currentLeft - handleWidth) / edge : 1)) : ((currentLeft - (otherLeft + handleHalf * 2) <= edge ? (currentLeft - (otherLeft + handleWidth)) / edge : 1) * (slider.outerWidth() - (currentLeft + handleHalf) <= edge ? (slider.outerWidth() - (currentLeft + handleHalf)) / edge : 1));
            modify = modify > 1 ? 1 : modify < 0 ? 0 : modify;

            if(handle.data('index') == 0) {
                svgPath.b = currentLeft / 2  * modify;
                svgPath.a = otherLeft;
            } else {
                svgPath.b = otherLeft + handleHalf;
                svgPath.a = (slider.outerWidth() - currentLeft) / 2 + currentLeft + handleHalf + ((slider.outerWidth() - currentLeft) / 2) * (1 - modify);
            }

            svgPath.x = currentLeft + handleHalf;
            svgPath.y = moveY * modify + 42;

            handle.css('--y', moveY * modify);

        }
    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, before, after, width) {
    let smoothing = .16,
        points = [
            [0, 42],
            [before <= 0 ? 0 : before, 42],
            update,
            [after >= width ? width : after, 42],
            [width, 42]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}

function setCSSVars(slider) {
    let handle = slider.find('.ui-slider-handle');
    slider.css({
        '--l': handle.eq(0).position().left + handle.eq(0).outerWidth() / 2,
        '--r': slider.outerWidth() - (handle.eq(1).position().left + handle.eq(1).outerWidth() / 2)
    });
}

/*
=============================================== 09. Rating ===============================================
*/

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});
/*
=============================================== 10. Add new field ===============================================
*/

function add(){
    var new_chq_no = parseInt($('#total_chq').val())+1;
    var new_input="<input type='text' class='form-control' id='new_"+new_chq_no+"' placeholder='Type email here...'>";
    $('#new_chq').append(new_input);
    $('#total_chq').val(new_chq_no)
  }
  function remove(){
    var last_chq_no = $('#total_chq').val();
    if(last_chq_no>1){
      $('#new_'+last_chq_no).remove();
      $('#total_chq').val(last_chq_no-1);
    }
  }