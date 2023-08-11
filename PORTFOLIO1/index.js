let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {
  showSlides((slideIndex += x));
}

function currentSlide(y) {
  showSlides((slideIndex = y));
}

function showSlides(z) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (z > slides.length) {
    slideIndex = 1;
  }
  if (z < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


