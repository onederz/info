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
