// nav responsive
const showLinks = document.querySelector(".toggle-links");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function (e) {
  showLinks.classList.toggle("show-links");
  toggleBtn.classList.toggle("show-toggle-btn");
});

// foot
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
