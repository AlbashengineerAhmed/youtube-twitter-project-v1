const menuIcon = document.getElementById("menu-icon");
const asideElement = document.querySelector("aside");

menuIcon.addEventListener("click", function () {
  // Toggle the sidebar visibility
  asideElement.classList.toggle("show-sidebar");
  // Toggle the icon between "menu" and "close" with a smooth animation
  if (menuIcon.textContent === "menu") {
    menuIcon.textContent = "close";
  } else {
    menuIcon.textContent = "menu";
  }
});
