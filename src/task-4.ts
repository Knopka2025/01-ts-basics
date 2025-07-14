console.log('\x1b[32mЗадача 4. Функції\x1b[0m');



function printUserInfo(name: string, age: number, email?: string):void {
    console.log("Name:", name);
    console.log("Age:", age);

  if (email) {
    console.log("Email:", email);
  }
}
printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
