document.addEventListener("DOMContentLoaded", function() {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const toolItems = document.querySelectorAll('.tool-item');

  searchInput.addEventListener('input', function() {
    const searchQuery = searchInput.value.toLowerCase();
    toolItems.forEach(function(item) {
      const title = item.querySelector('h2 a').textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        item.style.display = 'block'; // Show item if it matches the search
      } else {
        item.style.display = 'none'; // Hide item if it doesn't match the search
      }
    });
  });
});