const previousArrow = document.querySelector(".left--arrow--wrapper");
const nextArrow = document.querySelector(".right--arrow--wrapper");

previousArrow.addEventListener("click", previousTestimonial);
nextArrow.addEventListener("click", nextTestimonial);

let rev = 0;
carousel(rev);

function previousTestimonial() {
  rev = rev - 1;
  carousel(rev);
}

function nextTestimonial() {
  rev = rev + 1;
  carousel(rev);
}

function carousel(testimonialIndex) {
  let testimonials = document.querySelectorAll(".testimonial");

  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
    rev = 0;
  }

  if (testimonialIndex < 0) {
    testimonialIndex = testimonials.length - 1;
    rev = testimonials.length - 1;
  }

  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  testimonials[testimonialIndex].style.display = "block";
}
