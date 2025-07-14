console.log('\x1b[32mЗадача 6. Узагальнені типи \x1b[0m');


function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const number = getFirstElement<number>([1, 2, 3, 4, 5]);
const string = getFirstElement<string>(['a', 'b', 'c']);
const boolean = getFirstElement<boolean>([true, false, true]);



console.log(number);
console.log(string);
console.log(boolean);