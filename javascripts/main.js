//TIMELINE ANIMATION in Javascript

var timeline = $('#timeline');

timeline.bind('inview', function (event, visible) {
  if (visible == true) {
	
	/* this adds the css styles to the timeline elements to
	create the timeline animation when the element is in the viewport */
	$('.line').delay(500).animate({'height': '300px'});

	/* the points in the animations */
	$('.line').children('.point1').delay(1000).animate({'top': '30px'});
	$('.line').children('.point1').delay(1000).css('display', 'block');
	$('.line').children('.point2').delay(1000).animate({'top': '90px'});
	$('.line').children('.point2').delay(1000).css('display', 'block');
	$('.line').children('.point3').delay(1000).animate({'top': '150px'});
	$('.line').children('.point3').delay(1000).css('display', 'block');
	$('.line').children('.point4').delay(1000).animate({'top': '210px'});
	$('.line').children('.point4').delay(1000).css('display', 'block');
	$('.line').children('.point5').delay(1000).animate({'top': '270px'});
	$('.line').children('.point5').delay(1000).css('display', 'block');

	/* lines in the animation */
	$('.line1').delay(2000).animate({'width': '50px'});
	$('.line2').delay(2000).animate({'width': '50px'});
	$('.line3').delay(2000).animate({'width': '50px'});
	$('.line4').delay(2000).animate({'width': '50px'});
	$('.line5').delay(2000).animate({'width': '50px'});

	/* dates in the animation */
	$('.date1').delay(3000).animate({'opacity': '1'});
	$('.date2').delay(3000).animate({'opacity': '1'});
	$('.date3').delay(3000).animate({'opacity': '1'});
	$('.date4').delay(3000).animate({'opacity': '1'});
	$('.date5').delay(3000).animate({'opacity': '1'});
  }
  else {
	  /* When the timeline is out of view. the styles
	  will be reset. The next time the timeline is in view,
	  the animation will run again. */

	  /* points */
	$('.line').animate({'height': '0px'});

	$('.line').children('.point1').animate({'top': '-50px'});
	$('.line').children('.point1').css('display', 'none');
	$('.line').children('.point2').animate({'top': '-50px'});
	$('.line').children('.point2').css('display', 'none');
	$('.line').children('.point3').animate({'top': '-50px'});
	$('.line').children('.point3').css('display', 'none');
	$('.line').children('.point4').animate({'top': '-50px'});
	$('.line').children('.point4').css('display', 'none');
	$('.line').children('.point5').animate({'top': '-50px'});
	$('.line').children('.point5').css('display', 'none');

	/* lines */
	$('.line1').animate({'width': '0px'});
	$('.line2').animate({'width': '0px'});
	$('.line3').animate({'width': '0px'});
	$('.line4').animate({'width': '0px'});
	$('.line5').animate({'width': '0px'});

	/* dates */
	$('.date1').animate({'opacity': '0'});
	$('.date2').animate({'opacity': '0'});
	$('.date3').animate({'opacity': '0'});
	$('.date4').animate({'opacity': '0'});
	$('.date5').animate({'opacity': '0'});
  }
});


