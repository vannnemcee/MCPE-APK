 <script>
    const menuBtn = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeSidebar");

    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    const links = sidebar.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      });
    });

    function searchApp() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const apps = document.getElementsByClassName('app-card');

      for (let i = 0; i < apps.length; i++) {
        const app = apps[i];
        const title = app.querySelector('h4').innerText.toLowerCase();
        const label = app.querySelector('.label') ? app.querySelector('.label').innerText.toLowerCase() : '';

        if (title.includes(input) || label.includes(input)) {
          app.style.display = 'flex';
        } else {
          app.style.display = 'none';
        }
      }
    }
  </script>
