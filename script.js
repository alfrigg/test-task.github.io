const burger = document.getElementById('burger');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const never = document.getElementById('never');
const ok = document.getElementById('ok');

burger.addEventListener('click', () => {
  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

never.addEventListener('click', () => {
  modal.style.display = 'none';
})

ok.addEventListener('click', () => {
  modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


const image = document.querySelector('.image');

image.addEventListener('mouseenter', function() {
  this.style.animationPlayState = 'running';
});

image.addEventListener('mouseleave', function() {
  this.style.animationPlayState = 'paused';
});

