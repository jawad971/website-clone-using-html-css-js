// navbar

// const side = document.querySelector('#show');

// side.addEventListener('click',() =>{
//     const sideBar = document.querySelector('.sideBar');
//     sideBar.style.display = "flex";
// });


// const hide = document.querySelector('#hide');

// hide.addEventListener('click',() =>{
//     const sideBar = document.querySelector('.sideBar');
//     sideBar.style.display = "none";
// })


// slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  updateSliderPosition();
}

function updateSliderPosition() {
  const slider = document.getElementById('slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 3000);
