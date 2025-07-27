// menu
function navUtil() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
} 
function resetMenu() {
  var x = document.getElementById("links");
  if (x) x.style.display = "none";
}
document.addEventListener("DOMContentLoaded", resetMenu);
window.addEventListener("pageshow", function(event) {
  resetMenu();
});

