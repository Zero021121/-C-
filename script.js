const PASSWORD = 'C';
const track = document.getElementById('track');
const pwd = document.getElementById('pwd');
const go = document.getElementById('go');
const card = document.getElementById('card');

function setSlide(i) {
  track.style.transform = `translateX(${ -i * 50 }%)`;
}

function wrong() {
  card.classList.remove('shake');
  void card.offsetWidth;
  card.classList.add('shake');
}

function tryUnlock() {
  if (pwd.value === PASSWORD) {
    setSlide(1);
    pwd.value = '';
  } else wrong();
}

go.addEventListener('click', tryUnlock);
pwd.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') tryUnlock();
});

/* slideshow */
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(n) {
  slides[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => showSlide(current - 1));
document.getElementById('next').addEventListener('click', () => showSlide(current + 1));
