console.log('\x1b[32mЗадача 2. Інтерфейси\x1b[0m');

// У цьому фрагменті коду є об'єкт product, який описує товар.



// const product = {
//   id: 1,
//   title: "Tablet",
//   description: "Compact and fast",
// };

// console.log(`Product: ${JSON.stringify(product)}`);



// Завдання:

// Створи інтерфейс Product, який описує структуру цього об’єкта.
// Зроби поле id тільки для читання – воно не повинно змінюватись після створення об’єкта.
// Зроби поле description необов’язковим – не всі товари можуть його мати.
// Типізуй змінну product за допомогою створеного інтерфейсу.
// Залиш властивості обʼєкта product і їх значення без змін.



//? Оголошуємо інтерфейс користувача
interface Product {
    readonly id: number; // Це поле тільки для читання
    title: string;
    description?: string; // Це поле може бути відсутнім
}

//? Використовуємо інтерфейс для типізації
const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);