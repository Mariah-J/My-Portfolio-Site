const button = document.querySelector(".button");
const navMenu = document.querySelector(".nav-menu");

button.addEventListener("click", mobileMenu);

function mobileMenu() {
    button.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    button.classList.remove("active");
    navMenu.classList.remove("active");
} 

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please Enter a Valid Email Address");
  } else {
    email.setCustomValidity("");
  }
});

