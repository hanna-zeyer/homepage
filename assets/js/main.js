// menu
function navUtil() {
  const links = document.getElementById("links");
  const arrow = document.querySelector(".back-arrow");

  const isOpen = links.style.display === "flex";
  
  links.style.display = isOpen ? "none" : "flex";
  arrow.style.display = isOpen ? "inline" : "none";
}
function resetMenu() {
  var x = document.getElementById("links");
  if (x) x.style.display = "none";
}
document.addEventListener("DOMContentLoaded", resetMenu);
window.addEventListener("pageshow", function(event) {
  resetMenu();
});

