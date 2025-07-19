const toggle = document.createElement('button');
toggle.textContent = 'Toggle Dark Mode';
toggle.style.margin = '20px';
document.body.insertBefore(toggle, document.body.firstChild);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
