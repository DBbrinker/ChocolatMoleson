echo "console.log('Bienvenue sur mon site web !');" > js/script.js

  
<script>
  function toggleMenu() {
    const menu = document.getElementById("slideMenu");
    menu.classList.toggle("open");
  }

  // Quand la page est prête
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.getElementById("slideMenu");
    const links = menu.querySelectorAll("a");

    // Clic sur le bouton ouvre/ferme le menu
    menuButton.addEventListener("click", toggleMenu);

    // Clic sur un lien du menu => refermer le menu
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  });
</script>
