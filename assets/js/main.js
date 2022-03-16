/* Mostrar menu */
const menuToggle = document.querySelector(".menu_toggle");
const showcase = document.querySelector(".mobile_menu_bar");
const showcase2 = document.querySelector(".close_menu");
const showcase3 = document.querySelector(".nav_bar_mobile");

menuToggle.addEventListener("click", () => {
  showcase.classList.add("active");
  showcase2.classList.add("active_times");
  showcase3.classList.add("active_links");
});

/* Fechar menu
 */
const menuToggleClose = document.querySelector(".close_menu");
const showcaseClose = document.querySelector(".mobile_menu_bar");
const showcaseClose2 = document.querySelector(".close_menu");
const showcaseClose3 = document.querySelector(".nav_bar_mobile");

menuToggleClose.addEventListener("click", () => {
  showcaseClose.classList.remove("active");
  showcaseClose2.classList.remove("active_times");
  showcaseClose3.classList.remove("active_links");
});
