let slides = document.querySelectorAll('.Hero-section-left');
let articleSlides = document.querySelectorAll(".Hero-section-right-article1");
let iconPrev = document.getElementById('icon-prev');
let iconNext = document.getElementById('icon-next');
const hamburger = document.querySelector('.icon-hamburger');
const modalContainer = document.querySelector('.modal') ;
const closeIcon =document.querySelector('.icon-close');
let currentSlide = 0;

//display the menu when menu icon is clicked
if(hamburger){
hamburger.onclick = function(){
modalContainer.style.display = 'block';
}
}

//closing the menu, if close icon is clicked
if(closeIcon){
closeIcon.onclick = function(){
modalContainer.style.display = 'none';
}

}
//closing the menu, if anywhere on the window is clicked
if(closeIcon){
window.onclick = function(event){
  if(event.target === modalContainer){
  modalContainer.style.display = 'none';
}}

}

window.onresize = function(){
  if(closeIcon){
    if(window.innerWidth >= 375){
    modalContainer.style.display = 'none';
  } 
  }
  
}

//keeping all the given background images in an array
let images = ['images/desktop-image-hero-1.jpg', 'images/desktop-image-hero-2.jpg', 'images/desktop-image-hero-3.jpg'];

// Set background images for each image slide by looping through the array
slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url(${images[index]})`;
});

// Function to show the selected slide
function showSlide(index) {
  // firstly , Hide all image slides
  slides.forEach(slide => {
    slide.style.display = 'none';
    // slide.classList.remove('active');
  });


  // then, Show the selected image slide
  slides[index].style.display = 'block';

  // slides[index].classList.add('active');

  // Hide all article slides
  articleSlides.forEach(slide => {
    slide.style.display = 'none';
  });
  // Show the selected article slide
  articleSlides[index].style.display = 'block';

  currentSlide = index;
}

// Event handler for clicking on the next icon
iconNext.onclick = function() {
  //modulus here is to ensure looping   back when the last bg-image is reached
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Event handler for clicking on the previous icon
iconPrev.onclick = function () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// showSlide(currentSlide);

