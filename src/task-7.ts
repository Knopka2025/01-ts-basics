console.log('\x1b[32mЗадача 7. Типізація Promise (вискоче після 8 завдання!)\x1b[0m');




// Функція getMessage повертає проміс, який через затримку повертає рядок.

// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from TS");
//     }, 1000);
//   });
// }

// getMessage().then(result => console.log(result));



// Завдання:

// Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
// Переконайся, що значення, з яким виконається проміс, – це рядок (string).


const getMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello from TS"), 1000);
  });
};

getMessage().then((result) => console.log(result)); 




