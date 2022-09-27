'use strict'

// Create six product cards for featured products section on homepage
createCards(allProducts, 6, 'featured-products-inner');

// Create two seller cards for featured sellers section on homepage
createSellerCards(allSellers, 2, 'featured-sellers-inner');

// Carousel function (homepage)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  };
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}