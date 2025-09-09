const sidebarToggleBtns = document.querySelectorAll(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const searchForm = document.querySelector(".search-form");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const menuLinks = document.querySelectorAll(".menu-link");

// Updates the theme icon based on current theme and sidebar state
const updateThemeIcon = () => {
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : "dark_mode";
};

// Apply dark theme if saved or system prefers, then update icon
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();

// Toggle between themes on theme button click
themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
});

// Toggle sidebar collapsed state on buttons click
sidebarToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateThemeIcon();
  });
});


// Expand sidebar by default on large screens
if (window.innerWidth > 768) sidebar.classList.remove("collapsed");

// ...existing code...
document.getElementById('searchBtn').onclick = function() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.app-card').forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = title.includes(keyword) ? '' : 'none';
  });
};
// ...existing code...
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function doSearch() {
  const keyword = searchInput.value.toLowerCase();
  document.querySelectorAll('.app-card').forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = title.includes(keyword) ? '' : 'none';
  });
}

searchBtn.onclick = doSearch;
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    doSearch();
  }
});
// ...existing code...