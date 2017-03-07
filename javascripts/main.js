//Hand-written code (includes references)

var header = document.getElementsByTagName('header')[0];
/*reference: https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp*/

var  navLinks = document.getElementsByClassName('mobile-nav-links')[0];  //added this in previous commits
/*reference: https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName*/

var  navOverlay = document.getElementsByClassName('transparent-overlay')[0];
header.style.marginTop = (document.getElementsByTagName('nav')[0].offsetHeight + 5) + "px";
//The offsetHeight property returns the viewable height of an element in pixels, including padding, border and scrollbar, but not the margin.
navLinks.style.top = (document.getElementsByTagName('nav')[0].offsetHeight + 5) + "px";
navOverlay.style.top = (document.getElementsByTagName('nav')[0].offsetHeight + 5) + "px";


//onresize helps resize the window
window.onresize = function () {
    header.style.marginTop = (document.getElementsByTagName('nav')[0].offsetHeight + 5) + "px";
	navLinks.style.top = (document.getElementsByTagName('nav')[0].offsetHeight + 5) + "px";
	navOverlay.style.top = (document.getElementsByTagName('nav')[0].offsetHeight + 5) + "px";
}


//SMOOTH SCROLLING EFFECT
var smoothScroll = function(elementId) {
    var MIN_PIXELS_PER_STEP = 5;
    var MAX_SCROLL_STEPS = 60;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = -50;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}

//MOBILE NAV ANIMATION

function mobileNav() {
	var mobileNav = document.getElementsByClassName('mobile-nav')[0];
	var mobileNavLinks = document.getElementsByClassName('mobile-nav-links')[0];
	var mobileNavButton = document.getElementById('mobile-nav-button');
	var overlay = document.getElementsByClassName('transparent-overlay')[0];
	if(mobileNavLinks.style.marginLeft == "0%") {
		mobileNavLinks.style.marginLeft = "-50%";
		mobileNavLinks.style.top = mobileNav.height;
		mobileNavButton.innerHTML = "MENU";
		overlay.style.opacity = 0;
		overlay.style.display = "none";
	}
	else {
		mobileNavLinks.style.marginLeft = "0%";
		mobileNavButton.innerHTML = "CLOSE";
		overlay.style.opacity = 1;
		overlay.style.display = "block";
	}

}

function closeNav() {
	var mobileNav = document.getElementsByClassName('mobile-nav')[0];
	var mobileNavLinks = document.getElementsByClassName('mobile-nav-links')[0];
	var mobileNavButton = document.getElementById('mobile-nav-button');
	var overlay = document.getElementsByClassName('transparent-overlay')[0];

	mobileNavLinks.style.marginLeft = "-50%";
	mobileNavLinks.style.top = mobileNav.height;
	mobileNavButton.innerHTML = "MENU";
	overlay.style.opacity = 0;
	overlay.style.display = "none";

}

//END OF MOBILE NAV ANIMATION

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

//mobile timeline animation
$('.mobile-line').bind('inview', function (event, visible) {
  if (visible == true) {
	  $('.mobile-line').animate({
		  'height': '370px'
	  });
	  $('.mobile-line').children($('.point')).delay(2000).slideDown();
	}
	else {
	  $('.mobile-line').animate({
		'height': '0px'
	  });
	  $('.mobile-line').children($('.point')).slideUp();
	}
});
//END OF TIMELINE ANIMATION

//INTERESTS ANIMATION
var interests = $("#interests");
var children = $(".interests .row");

interests.bind('inview', function (event, visible) {

	if (visible == true) {
		for(i = 0, j = 1000; i  < children.length; i++, j+= 1000){
			$(children[i]).css('visibility','visible').hide().delay(j).slideDown(300);
		}
	}
	else {
		for(i = 0; i  < children.length; i++){
			$(children[i]).slideUp(0);
		}
	}
});


//FOLLOWING CODE IS FOR THE CONTACT FORM

//button that opens contact form
var composeButton = document.getElementById('compose-button');

//the contact form
var contactForm = document.getElementById('compose-modal');

composeButton.onclick = function(){
  contactForm.style.display = "block";
}

//button that closes contact form
var closeButton = document.getElementById('close-button');

closeButton.onclick = function(){
  contactForm.style.display = "none";
}

//FUNTION THAT SENDS EMAIL
function sendEmail(correctCounter) {
  if (correctCounter == 4) {
    contactForm.style.display = "none";
    success.style.display = "block";
    success.style.opacity = "1";
    setTimeout(function(){
        success.style.opacity = "0";
    }, 3000);
  }
}


//The following checks for errors in the form
function checkErrors() {
  var firstName = document.getElementById('first-name');
  var lastName = document.getElementById('last-name');
  var subject = document.getElementById('compose-subject');
  var message = document.getElementById('compose-message');
  /* The following JavaScript Regular Expressions (RegExp) are from : https://www.w3schools.com/jsref/jsref_obj_regexp.asp */
  var RegExp = /[\d \s]/g;
  var specialChar = /[! @ # $ % ^ & * ( ) \[ \] - _ = + \ | / ? . > < ,  " : ; ` ~]/g;
  var RegExp2 = /[a-zA-Z0-9]/g;
  /* the following counter will keep track of whether the form fields are correct.
  it will decide if the form should display the success message or not. */
  var correctCounter = 0;

	if(firstName.value == "" || RegExp.test(firstName.value) == true || specialChar.test(firstName.value) == true) {
		firstName.style.borderColor = "red";
		firstName.style.boxShadow = " 0px 0px 5px 5px red";
		firstName.placeholder = "Enter your first name here. Numbers not allowed";
		firstName.value = "";
	}

	else {
		firstName.style.borderColor = "#3F7674";
		firstName.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}

	if(lastName.value == "" || RegExp.test(lastName.value) == true || specialChar.test(firstName.value) == true) {
		lastName.style.borderColor = "red";
		lastName.style.boxShadow = " 0px 0px 5px 5px red";
		lastName.placeholder = "Enter your last name here. Numbers not allowed";
		lastName.value = "";
	}
	else {
		lastName.style.borderColor = "#3F7674";
		lastName.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}

	if(subject.value == "" || RegExp2.test(subject.value) == false || specialChar.test(subject.value) == true) {
		subject.style.borderColor = "red";
		subject.style.boxShadow = " 0px 0px 5px 5px red";
		subject.placeholder = "Please enter a subject";
	}
	else  {
		subject.style.borderColor = "#3F7674";
		subject.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}

	if(message.value == "" || RegExp2.test(message.value) == false) {
		message.style.borderColor = "red";
		message.style.boxShadow = " 0px 0px 5px 5px red";
		message.placeholder = "Please enter a message";
	}
	else {
		message.style.borderColor = "#3F7674";
		message.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}
  sendEmail(correctCounter);
}
