let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = totalSlides - 3;  // Wrap around to the last group of slides
  } else if (currentIndex > totalSlides - 3) {
    currentIndex = 0;  // Wrap around to the first group of slides
  }
  
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${(currentIndex * 33.33)}%)`;  // Move the slides
}
