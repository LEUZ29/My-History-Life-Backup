let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide img");

function showSlide(index) {
  // Remove classe ativa de todos
  slides.forEach((img) => img.classList.remove("active"));

  // Lógica para voltar ao início ou fim
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  // Adiciona classe ativa no slide atual
  slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Troca automática a cada 5 segundos
setInterval(() => {
  changeSlide(1);
}, 5000);
