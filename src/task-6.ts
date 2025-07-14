console.log('\x1b[32mЗадача 6. Узагальнені типи \x1b[0m');
// Функція getFirstElement приймає масив і повертає його перший елемент.



// function getFirstElement(arr) {
//   return arr[0];
// }

// getFirstElement([1, 2, 3]);           // 1
// getFirstElement(["a", "b", "c"]);     // "a"
// getFirstElement([true, false, true]); // true



// Завдання:

// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const number = getFirstElement<number>([1, 2, 3, 4, 5]);
const string = getFirstElement<string>(['a', 'b', 'c']);
const boolean = getFirstElement<boolean>([true, false, true]);



console.log(number);
console.log(string);
console.log(boolean);