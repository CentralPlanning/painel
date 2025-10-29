// Função de rolagem suave com compensação da navbar
function scrollComOffset(targetId) {
  const target = document.querySelector(targetId);
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Aplica a rolagem suave nos links da navbar
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    scrollComOffset(targetId);
  });
});

// Alternar tema com o switch
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.querySelector('.logo-img');

// Aplica o tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  toggle.checked = true;
  body.classList.add('light-mode');
  logo.src = 'img/logo-light.png';
} else {
  body.classList.remove('light-mode');
  logo.src = 'img/logo-dark.png';
}

// Alternar tema e logo dinamicamente
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('light-mode');
    logo.src = 'img/logo-light.png';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    logo.src = 'img/logo-dark.png';
    localStorage.setItem('theme', 'dark');
  }
});
