function showhide() {
  var d = new Date();
  var s = document.getElementsByClassName(d.getDay());
  for (var i = 0; i < s.length; i++) {
    s[i].style.display = 'block';
  }
}

showhide();


var d=new Date,month=new Array;month[0]="January",month[1]="February",month[2]="March",month[3]="April",month[4]="May",month[5]="June",month[6]="July",month[7]="August",month[8]="September",month[9]="October",month[10]="November",month[11]="December";var month_name=month[d.getMonth()],day_of_month=d.getDate(),current_year=d.getFullYear(),dayOfMonthElement=document.getElementById("current_day"),currentMonthElement=document.getElementById("current_month"),currentYearElement=document.getElementById("current_year");!function(){currentMonthElement.innerHTML=month_name,dayOfMonthElement.innerHTML=day_of_month,currentYearElement.innerHTML=current_year}();
var d=new Date,month=new Array;month[0]="January",month[1]="February",month[2]="March",month[3]="April",month[4]="May",month[5]="June",month[6]="July",month[7]="August",month[8]="September",month[9]="October",month[10]="November",month[11]="December";var month_name=month[d.getMonth()],day_of_month=d.getDate() + 1,current_year=d.getFullYear(),dayOfMonthElement=document.getElementById("current_day_tmr"),currentMonthElement=document.getElementById("current_month_tmr"),currentYearElement=document.getElementById("current_year_tmr");!function(){currentMonthElement.innerHTML=month_name,dayOfMonthElement.innerHTML=day_of_month,currentYearElement.innerHTML=current_year}();

$('.carousel').carousel({
  touch: false
});
 /* Sunday carousel */
 $('#carousel-0').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Sunday carousel */
 $('#carousel-0-1').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Monday carousel */
 $('#carousel-1').carousel({
  interval: 5000,
  wrap: true,
  keyboard: true
});

 /* Monday carousel */
 $('#carousel-1-1').carousel({
  interval: 5000,
  wrap: true,
  keyboard: true
});

 /* Tuesday carousel */
 $('#carousel-2').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Tuesday carousel */
 $('#carousel-2-1').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Wednesday carousel */
 $('#carousel-3').carousel({
  interval: 5000,
  wrap: true,
  keyboard: true
});

 /* Wednesday carousel */
 $('#carousel-3-1').carousel({
  interval: 5000,
  wrap: true,
  keyboard: true
});

 /* Thursday carousel */
 $('#carousel-4').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Thursday carousel */
 $('#carousel-4-1').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Friday carousel */
 $('#carousel-5').carousel({
  interval: 5000,
  wrap: true,
  keyboard: true
});

 /* Friday carousel */
 $('#carousel-5-1').carousel({
  interval: 5000,
  wrap: true,
  keyboard: true
});

 /* Saturday carousel */
 $('#carousel-6').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

 /* Saturday carousel */
 $('#carousel-6-1').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});

/* loading */
window.addEventListener('load', function () {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});


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