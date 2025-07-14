console.log('\x1b[32mЗадача 3. Типізація масивів\x1b[0m');


// У цьому коді є три масиви з різними типами даних: рядки, числа та об’єкти.



// const usernames = ["alice", "bob", "charlie"];

// const ratings = [4.5, 3.8, 5];

// const products = [
//   { id: 1, title: "Phone" },
//   { id: 2, title: "Laptop" },
// ];

// console.log(`Usernames: ${JSON.stringify(usernames)}`);
// console.log(`Ratings: ${JSON.stringify(ratings)}`);
// console.log(`Products: ${JSON.stringify(products)}`);



// Завдання:

// Додай тип для масиву рядків usernames, використовуючи синтаксис [].
// Додай тип для масиву чисел ratings, використовуючи синтаксис [].
// Для масиву products:
// Створи окремий інтерфейс Product для елементів масиву.
// Типізуй сам масив за допомогою цього інтерфейсу.
// 4. Залиш елементи масиву products без змін.


const usernames: string[] = ["alice", "bob", "charlie"];//Додай тип для масиву рядків usernames, використовуючи синтаксис [].

const ratings: number[] = [4.5, 3.8, 5];//Додай тип для масиву чисел ratings, використовуючи синтаксис [].

interface Product {
  id: number;
  title: string;
} //Для масиву products:
// Створи окремий інтерфейс Product для елементів масиву.
// Типізуй сам масив за допомогою цього інтерфейсу.

const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
]; // Залиш елементи масиву products без змін.

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
