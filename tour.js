//Flip Card

$('.card').click(function(e){
    e.preventDefault();
    $(this).toggleClass('flipped');
})

//Slide image

let slideIndexcycling = 0;
showSlidescycling();

function showSlidescycling() {
  let i;
  let slidescycling = document.getElementsByClassName("mySlides-cycling");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidescycling.length; i++) {
    slidescycling[i].style.display = "none";  
  }
  slideIndexcycling++;
  if (slideIndexcycling > slidescycling.length) {slideIndexcycling = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidescycling[slideIndexcycling-1].style.display = "block";  
  dots[slideIndexcycling-1].className += " active";
  setTimeout(showSlidescycling, 2000); // Change image every 2 seconds
}

let slideIndexkp = 0;
showSlideskp();

function showSlideskp() {
  let i;
  let slideskp = document.getElementsByClassName("mySlides-kp");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slideskp.length; i++) {
    slideskp[i].style.display = "none";  
  }
  slideIndexkp++;
  if (slideIndexkp > slideskp.length) {slideIndexkp = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideskp[slideIndexkp-1].style.display = "block";  
  dots[slideIndexkp-1].className += " active";
  setTimeout(showSlideskp, 2000); // Change image every 2 seconds
}

let slideIndexphare = 0;
showSlidesphare();

function showSlidesphare() {
  let i;
  let slidesphare = document.getElementsByClassName("mySlides-phare");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidesphare.length; i++) {
    slidesphare[i].style.display = "none";  
  }
  slideIndexphare++;
  if (slideIndexphare > slidesphare.length) {slideIndexphare = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesphare[slideIndexphare-1].style.display = "block";  
  dots[slideIndexphare-1].className += " active";
  setTimeout(showSlidesphare, 5000); // Change image every 5 seconds
}

let slideIndexceramic = 0;
showSlidesceramic();

function showSlidesceramic() {
  let i;
  let slidesceramic = document.getElementsByClassName("mySlides-ceramic");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidesceramic.length; i++) {
    slidesceramic[i].style.display = "none";  
  }
  slideIndexceramic++;
  if (slideIndexceramic > slidesceramic.length) {slideIndexceramic = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesceramic[slideIndexceramic-1].style.display = "block";  
  dots[slideIndexceramic-1].className += " active";
  setTimeout(showSlidesceramic, 2000); // Change image every 2 seconds
}

let slideIndexkohker = 0;
showSlideskohker();

function showSlideskohker() {
  let i;
  let slideskohker = document.getElementsByClassName("mySlides-kohker");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slideskohker.length; i++) {
    slideskohker[i].style.display = "none";  
  }
  slideIndexkohker++;
  if (slideIndexkohker > slideskohker.length) {slideIndexkohker = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideskohker[slideIndexkohker-1].style.display = "block";  
  dots[slideIndexkohker-1].className += " active";
  setTimeout(showSlideskohker, 2000); // Change image every 2 seconds
}

let slideIndexcooking = 0;
showSlidescooking();

function showSlidescooking() {
  let i;
  let slidescooking = document.getElementsByClassName("mySlides-cooking");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidescooking.length; i++) {
    slidescooking[i].style.display = "none";  
  }
  slideIndexcooking++;
  if (slideIndexcooking > slidescooking.length) {slideIndexcooking = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidescooking[slideIndexcooking-1].style.display = "block";  
  dots[slideIndexcooking-1].className += " active";
  setTimeout(showSlidescooking, 2000); // Change image every 2 seconds
}

$(document).ready(function(){
  // Add smooth scrolling to all links with the class scroll
  $("a.scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});