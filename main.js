// Esperar que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Quitar clase activa de todos
      menuItems.forEach((el) => el.classList.remove("active"));

      // Agregar clase activa al que se clicó
      this.classList.add("active");
    });
  });
});
