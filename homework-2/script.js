// 1
let timeOfDay = prompt("Введите пожалуйста время суток: утро, день или вечер");

if (typeof timeOfDay === "string" && timeOfDay.trim() !== "") {
    
    timeOfDay = timeOfDay.trim().toLowerCase();

    let drink;
    if (timeOfDay === "утро") {
        drink = "кофе";
    } else if (timeOfDay === "день") {утутро
        drink = "чай";
    } else if (timeOfDay === "вечер") {
        drink = "горячий шоколад";
    } else {
        alert("Ошибка: Пожалуйста, введите одно из следующих значений: утро, день или вечер.");
    }

    if (timeOfDay) {
        alert(`Рекомендуем вам ${drink}!`);
    }
} else {
    alert("Ошибка: Введите корректное время суток (утро, день или вечер).");
}

// 2 
let name = prompt("Введите пожалуйста ваше имя: ");
let age = prompt("Введите пожалуйста ваш возраст: ");
let subject = prompt("Введите пожалуйста ваш предмет: ");
let grade = prompt("Введите пожалуйста вашу оценку: ");

let person = {
    name: name,
    age: Number(age),
    subject: subject,
    grade: grade
};

console.log("Изначальный объект: ", person);

person.age += 5;

console.log("Объект после увеличение возраста на 5 лет: ", person);

//3
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log(movies[1].director);

console.log(movies[3].genre)

//4
const products = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
console.log("Исходный список покупок:", products);


products.unshift("колбаса");
console.log("После добавления нового товара в начало:", products);


products.pop();
console.log("После удаления последнего товара:", products);


products.splice(2, 1, "кефир", "ананас");
console.log("После замены третьего элемента на два новых товара:", products);