// SLIDER
var slideIndex = 1;
showDivs0(slideIndex);

function plusDivs0(n) {
  showDivs0(slideIndex += n);
}

function showDivs0(n) {
  var i;
  var x = document.getElementsByClassName("mySlides0");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
