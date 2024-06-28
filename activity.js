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

let slideIndexst = 0;
showSlidesst();

function showSlidesst() {
  let i;
  let slidesst = document.getElementsByClassName("mySlides-st");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidesst.length; i++) {
    slidesst[i].style.display = "none";  
  }
  slideIndexst++;
  if (slideIndexst > slidesst.length) {slideIndexst = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesst[slideIndexst-1].style.display = "block";  
  dots[slideIndexst-1].className += " active";
  setTimeout(showSlidesst, 3000); // Change image every 2 seconds
}