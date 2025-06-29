
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeBtn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
      themeBtn.innerText = "☀️ Light Mode";
    } else {
      themeBtn.innerText = "🌙 Dark Mode";
    }
  }

   