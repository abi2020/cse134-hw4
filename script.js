function toggleTheme() {
    const body = document.body;
  
    // Toggle the 'dark-theme' class
    body.classList.toggle('dark-theme');
  
    // Save the theme preference to localStorage
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  }
  
  // Check for the theme preference on page load
  document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
  
    // Apply the saved theme preference
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
    }
  });
  