// part1

// 1
document.title = "Дәулет Әбдікерім";

// 2
const headerElement = document.getElementById("header"); 
const h1Element = headerElement.querySelector("h1"); 
h1Element.textContent = "Изучение JavaScript"; 

// 3
const menuLinks = document.querySelectorAll(".menu-link"); 
for (let i = 0; i < menuLinks.length; i++) {
    console.log(menuLinks[i].textContent); 
  }

// 4
const featuresList = document.querySelectorAll(".features-list li");
if (featuresList.length > 1) {
  featuresList[1].innerHTML = "Поддержка <b>API</b>";
}


