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

//const email = document.getElementById("mail");

//email.addEventListener("input", function (event) {
 // if (email.validity.typeMismatch) {
 //   email.setCustomValidity("Please Enter a Valid Email Address");
 // } else {
 //   email.setCustomValidity("");
 // }
//});

const submitButton = document.getElementById('submitButton');

const validate = (e) => {
  e.preventDefault();
  const nameField = document.getElementById('nameField');
  const emailField = document.getElementById('emailField');
  if (nameField.value === "") {
    alert("Please enter your name.");
    nameField.focus();
    return false;
  }
    
  if (emailField.value === "") {
    alert("Please enter your email address.");
    emailField.focus();
    return false;
  }

  if (!emailIsValid(emailField.value)) {
    alert("Please enter a valid email address.");
    emailField.focus();
    return false;
  }
  
  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitButton.addEventListener('click', validate); 
