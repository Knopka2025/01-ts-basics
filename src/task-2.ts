console.log('\x1b[32mЗадача 2. Інтерфейси\x1b[0m');


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