let slides = document.getElementsByClassName('slide'); 

// console.log(slides);

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1; 
    } else if (index >= slides.length) {
      currentIndex = 0; 
    } else {
      currentIndex = index; 
    }
  
    for (let i = 0; i < slides.length; i++) {
      if (i === currentIndex) {
        slides[i].style.display = 'block'; 
      } else {
        slides[i].style.display = 'none';
      }
    }
  }

showSlide(currentIndex);

document.getElementsByClassName('prev')[0].addEventListener('click', () => {
  showSlide(currentIndex - 1); 
});

document.getElementsByClassName('next')[0].addEventListener('click', () => {
  showSlide(currentIndex + 1); 
});
