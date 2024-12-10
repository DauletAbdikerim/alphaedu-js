// 1
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`);


// 2
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];


  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.numberOfPages}, Жанр: ${book.genre}`);
    console.log("Награды:");
    for (let j = 0; j < book.awards.length; j++) {
      console.log(`- ${book.awards[j]}`);
    }
    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ ");
  }


  // 3
  function calculateAveragePages(books){
    
    let sumOfPages = 0;

    for (let i = 0; i < books.length; i++) {
        sumOfPages += books[i].numberOfPages;
    }

    return (sumOfPages / books.length);
  };

  console.log(`Среднее количество страниц: ${calculateAveragePages(books)}`);


  // 4 
  let repeatedString = 0;
  let str = prompt("Введите строку: ");
  let n = prompt("Введите число");
  
  function repeatString(str, n){

    let repeatedString = "";
    for (let i = 0; i < n; i++) {
        repeatedString += str;
    }
    return repeatedString;
  }

  console.log(`Повторенная строка: ${repeatString(str, n)}`);


  // 5
  function calculateAverage (nums){
    let sum = 0;
    for (i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return (sum/nums.length);
  }
  
  const input = [10, 20, 30, 40, 50, 60];
  console.log(`Среднее значение чисел: ${calculateAverage (input)}`);


   // 6
   function countEvenNumbers(numbers) {
    const evenNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
  
    return evenNumbers;
  }

  const inputNumbers = [1, 2, 3, 4, 5, 6];
  console.log(`Четные числа: ${countEvenNumbers (inputNumbers)}`);