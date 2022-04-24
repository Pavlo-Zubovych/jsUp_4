const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  dots = document.querySelectorAll('.dot'),
  slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = (n) => {
  for (const slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = (n) => {
  for (const dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurentSlide(index);
  } else {
    index++;
    prepareCurentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurentSlide(index);
  } else {
    index--;
    prepareCurentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2000); // +
