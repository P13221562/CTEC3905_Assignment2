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


//DISPLAYS CONTACT FORM

//button that opens contact form
var composeButton = document.getElementById('compose-button');

//the contact form
var contactForm = document.getElementById('compose-modal');

composeButton.onclick = function(){
  contactForm.style.display = "block";
}

//CLOSES CONTACT FORM

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


//CHECKS FOR ERRORS IN CONTACT FORM
function checkErrors() {
	var firstName = document.getElementById('first-name');
	var lastName = document.getElementById('last-name');
	var subject = document.getElementById('compose-subject');
	var message = document.getElementById('compose-message');
	var regex = /[\d \s]/g;
  var specialChar = /[! @ # $ % ^ & * ( ) \[ \] - _ = + \ | / ? . > < ,  " : ; ` ~]/g;
  var regex2 = /[a-zA-Z0-9]/g;
  /* this counter will keep track of how many of the form fields are correct.
  this will be used to decide if the form should display the success message. */
  var correctCounter = 0;

	if(firstName.value == "" || regex.test(firstName.value) == true || specialChar.test(firstName.value) == true) {
		firstName.style.borderColor = "crimson";
		firstName.style.boxShadow = " 0px 0px 5px 5px crimson";
		firstName.placeholder = "Enter your first name here";
		firstName.value = "";
	}

	else {
		firstName.style.borderColor = "#3F7674";
		firstName.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}

	if(lastName.value == "" || regex.test(lastName.value) == true || specialChar.test(firstName.value) == true) {
		lastName.style.borderColor = "crimson";
		lastName.style.boxShadow = " 0px 0px 5px 5px crimson";
		lastName.placeholder = "Enter your last name here";
		lastName.value = "";
	}
	else {
		lastName.style.borderColor = "#3F7674";
		lastName.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}

	if(subject.value == "" || regex2.test(subject.value) == false || specialChar.test(subject.value) == true) {
		subject.style.borderColor = "crimson";
		subject.style.boxShadow = " 0px 0px 5px 5px crimson";
		subject.placeholder = "You must enter a subject";
	}
	else  {
		subject.style.borderColor = "#3F7674";
		subject.style.boxShadow = " 0px 0px 5px 5px #3F7674";
    correctCounter++;
	}

	if(message.value == "" || regex2.test(message.value) == false) {
		message.style.borderColor = "crimson";
		message.style.boxShadow = " 0px 0px 5px 5px crimson";
		message.placeholder = "You must enter a message";
	}
	

  sendEmail(correctCounter);
}


