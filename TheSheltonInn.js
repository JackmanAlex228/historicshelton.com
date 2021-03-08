// Map
// Make sure the api is up to date in the future
function myMap()
{
  myCenter=new google.maps.LatLng(43.618539, -111.823526);
  var mapOptions= {
	center:myCenter,
	zoom:10, scrollwheel: true, draggable: true,
	mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
	position: myCenter,
  });
  marker.setMap(map);
}

// Tabbed menu for rooms
function openRoom(evt, roomName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("rooms");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink")
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
	}
	document.getElementById(roomName).style.display = "block";
	evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

// Slide show for willow creek
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
}

// Slide show for Eagle Rock
var slideIndexE = 1;
showSlidesE(slideIndexE);

function plusSlidesE(n) {
    showSlidesE(slideIndexE += n);
}

function currentSlideE(n) {
    showSlidesE(slideIndexE = n);
}

function showSlidesE(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesE");
    var dots = document.getElementsByClassName("dotE");
    if (n > slides.length) { slideIndexE = 1 }
    if (n < 1) { slideIndexE = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexE - 1].style.display = "block";
    dots[slideIndexE - 1].className += " active";
}

// Slide show for Prospect
var slideIndexP = 1;
showSlidesP(slideIndexP);

function plusSlidesP(n) {
    showSlidesP(slideIndexP += n);
}

function currentSlideP(n) {
    showSlidesP(slideIndexP = n);
}

function showSlidesP(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesP");
    var dots = document.getElementsByClassName("dotP");
    if (n > slides.length) { slideIndexP = 1 }
    if (n < 1) { slideIndexP = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexP - 1].style.display = "block";
    dots[slideIndexP - 1].className += " active";
}