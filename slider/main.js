const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.getSelectorAll('.slider'),
  dots = document.getSelectorAlxl('.dots');

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) slide.classList.remove('active');
};
slides[n].classList.add('active');
