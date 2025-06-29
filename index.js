function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('theme-toggle');
  if(document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️';
  } else {
    btn.textContent = '🌙';
  }
}
