// 1
const infoSection = document.getElementById("info");
const ulElement = document.createElement("ul");

const listItems = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"];
for (let i = 0; i < listItems.length; i++) {
    const li = document.createElement("li"); 
    li.textContent = listItems[i];
    ulElement.appendChild(li); 
  }
infoSection.appendChild(ulElement); 

// 2
const header = document.getElementById("header"); 
const link = document.createElement("a"); 
link.textContent = "Мой профиль в Linkedin";
link.href = "https://www.linkedin.com/in/daulet-abdikerim";
link.target = "_blank"; 
header.appendChild(link);

// 3
const dynamicSection = document.createElement("section"); 
dynamicSection.className = "dynamic";

const h2 = document.createElement("h2"); 
h2.textContent = "Обучение JavaScript"; 

const p = document.createElement("p"); 
p.textContent =  "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

dynamicSection.appendChild(h2); 
dynamicSection.appendChild(p);

const main = document.getElementById("main");
main.prepend(dynamicSection);

// 4
const firstParagraph = infoSection.querySelector("p"); 
if (firstParagraph) {
  infoSection.removeChild(firstParagraph);
}

// 5
const footer = document.getElementById("footer");
footer.innerHTML = "";