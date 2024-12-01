// 1
const firstName = "Даулет";
const lastName = "Әбдікерім";
const age = 37;
const message = `Меня зовут ${firstName} ${lastName} и мне ${age} лет`;
console.log(message); 

// 2
const city = "Астана";
const message2 = "Я родом из города " + city;
console.log(message2);

// 3
const password = "password123";
const hasAccess = password !=="";
console.log("Пароль: ", password);
console.log("has access: ", hasAccess);

// 4
let isMember = false;
console.log(isMember)
const stringIsMember = isMember.toString();
console.log("Значение:", stringIsMember);
console.log("Тип данных:", typeof stringIsMember);

// 5
const cartItems = 0;
isCartEmpty = Boolean(cartItems); 
console.log("Значение isCartEmpty: ", isCartEmpty); // false потому что значение cartItems равно 0

// 6
const averageScore = 89.75695;
console.log(averageScore.toFixed(1));

// 7
const greetingMessage = "     Приветсвую вас в мире программирования!         ";
const trimmedGreetingMessage = greetingMessage.trim();
console.log(greetingMessage);
console.log(trimmedGreetingMessage);
const upperCaseTrimmedGreetingMessage = trimmedGreetingMessage.toUpperCase();
console.log(upperCaseTrimmedGreetingMessage);
console.log(trimmedGreetingMessage.includes("программирования"))