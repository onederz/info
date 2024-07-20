//Flip Card

$('.card').click(function(e){
    e.preventDefault();
    $(this).toggleClass('flipped');
})

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }