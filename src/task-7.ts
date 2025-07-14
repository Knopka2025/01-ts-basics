console.log('\x1b[32mЗадача 7. Типізація Promise (вискоче після 8 завдання!)\x1b[0m');



const getMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello from TS"), 1000);
  });
};

getMessage().then((result) => console.log(result)); 




