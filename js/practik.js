// Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое количество месяцев в году». Если пользователь вводит 12 , 
// то показать: «Верно!», в противном случае – отобразить: «Не знаете ? 12!»

// 1) Попросить у юзера число
// 2) Проверить равно ли оно 12
// 3) На основе проверки запустить if или else

// const userNumber = Number(prompt('Enter number'));

// if (userNumber === 12) {
//     console.log('Correct')
// } else {
//     console.log('Error')
// }

// Написать программу которая получит от пользователя число и определит четное это число или не четное.

// 1) Получить число
// 2) Написать проверку на чет нечет
// 3) Вивести результат


// const day = prompt("Enter day");

// if (day % 2 === 0) {
//     console.log('Четное')
// } else {
//     console.log("Нечет")
// }


// Написать программу где мы спрашиваем у пользователя номер месяца  и показываем к какому времени года он принадлежит 
// Если пользователь вводит 2 - показываем слово Зима

// 1) Получить данные от юзера
// 2) Проверка на время года
// 3) Вывести результат

// const monthNumber = Number(prompt('enter month number'));
// // розписано
// if (monthNumber === 1) {
//     console.log('Зима')
// } else if (monthNumber === 2) {
//     console.log('Зима')
// } else if (monthNumber === 12) {
//     console.log('Зима')
// }
// скоорчений запис
// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//     console.log("Зима")
// } else if (monthNumber >= 3 && monthNumber <= 5) {
//     console.log('Весна');
// } else if (monthNumber >= 6 && monthNumber <= 8) {
//     console.log('Лето')
// } else if (monthNumber >= 9 && monthNumber <= 11) {
//     console.log('Осень')
// } else {
//     console.log('данные не валидны')
// }


// Написать программу которая проверяет логин и пароль пользователя и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'

// const userLogin = prompt('Enter login')
// const userPassword = prompt('Enter password')

// if (login === userLogin && password === userPassword) {
//     console.log('Wellcome')
// } else {
//     console.log('Error')
// }

// тернарний варіант провірки використовується якщо є лише два варіанти перевірки

// const result = login === userLogin && password === userPassword ? "Wellcome" : 'Error'

// console.log('result', result)

// написать програму которая спращивает у пользователя период подписки на сервис и показывает цену подписки
// сначала if else потом switch 
// Если ввел День - цена 1.99
// Если Неделя - цена 5.99
// Если месяц - цена 10.99
// Если год - цена 100.99

// const period = prompt('Enter period')

// if (period === 'День') {
//     console.log('1.99')
// } else if (period === 'Неделя') {
//     console.log('5.99')
// } else if (period === 'Месяц') {
//     console.log('10.99')
// } else if (period === 'Год') {
//     console.log('100.99')
// }

// switch (period) {
//     case "День":
//         console.log('1.99')
//         break;
//         case 'Неделя':
//         console.log('5.99')
//         break;
//         case 'Месяц':
//         console.log('10.99')
//         break
//         case 'Год':
//         console.log('100.99')
//         break
//     default:
//         console.log('Error')
//         break;
// }


// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//     console.log(i)
// }

// вывести только числа кратные 10

// for (let i = min; i <= max; i += 10) {
//     console.log(i)
// } // 10 итераций

// for (let i = min; i <= max; i += 1) {
//     if (i % 10 === 0) {
//         console.log(i) // 20  30
//     }
//     continue
// }

// for (let i = min; i <= max; i += 1) {
//     if (i % 10 !== 0) {
//         continue

//     }
//     console.log(i) // 20  30
// }

// for (let i = min; i <= max; i += 10) {
//     if (i === 50) {
//         break
//     }
//     console.log(i)
// } // 10 итераций

// for (let i = min; i < 50; i += 10) {

//     console.log(i)
// } // 10 итераций

// for(let i = min; i <= max; i += 1) {
//   console.log(i)
// @@ -102,13 +287,23 @@
//     console.log(i);
//   }




//do do while
//while do while

// Напишите цикл, который предлагает ввести число большее 100 через prompt. 
// Если посетитель ввёл другое число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена в промпт.

// let number = 0;
// let number = 0;

// while (number !== null && number <= 100) {
//     number = prompt('Enter number');
//     console.log("number", number)
// }

// do {
//     number = prompt('Enter number');
//     console.log("number", number);
// } while (number !== null && number <= 100);

// while (number !== null && number <= 100) {
//     number = prompt('Enter number');
//  }


// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";
// console.table(fruits)
// fruits[1] = `qweqwe`;
// console.log(fruits);

// console.log(fruits[2]);

// const lastIndex = fruits.length - 1;

//1) Напиши функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их
// среднее значение.Все аругменты будут только числами.

// 1) Нужно посчитать суму всех аргументов
//2) Посчитать средьнее значение
//3) Вывести результат на экран

// function calculateAverage() {
//   console.log("arguments", arguments);
// }
// console.log(calculateAverage(1, 2, 3, 4));

//   const numbers = Array.from(arguments);
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//  }
//   const length = numbers.length;
//   const average = total / length;
//   return average;
// 



// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// const pow = function (x, n) {
//   return Math.pow(x, n);
// };
// console.log(pow(2, 4));
// 


// TASK 2
// напиши функцию которая будет суммировать 
// соседние числа и пушить их в новый массив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15]; [33, 39, 27, 29]

// const addNumbers = function (numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 2) {
//     numbers[i] += numbers[i + 1];
//     newNumbers.push(numbers[i]);
//   }
//   return newNumbers;
// };

// console.log(addNumbers([22, 11, 34, 5, 12, 13, 14, 15]));

// TASK 3
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.
// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];

// const addNewArr = function (array) {
//   const newArray = [];
//   for (let elem of array) {
//     if (elem % Math.sqrt(elem) === 0) {
//       newArray.push(Math.sqrt(elem));
//     }
//   }
//   return newArray;
// }
// console.log(addNewArr(arr));


// TASK 4

// // даны 2 массива
// const nums = [1, "b", 3, "d", 5];
// const strs = ["a", 2, "c", 4, "e"];

// // Напишите функцию которая будет принимать 2 массива в качестве аргументов
// // и вернет новый массив ['1a', '2b', '3c', '4d', '5e']


// const array = (array1, array2) => {
//   const newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     typeof array1[i] === "number"
//       ? newArray.push(array1[i] + array2[i])
//       : newArray.push(array2[i] + array1[i]);
//   }

//   return newArray;
// };
// console.log(array(nums, strs));

// TASK 5
// привести массив к одному уровню

// const tryThis = [
//     [23, 11, ["hello", "world", "Vasya"]],
//     "some str",
//     [777, "word", ["Привет", ["как сюда добраться"]]],
//   ];

//   const newTryThis = tryThis.flat(Infinity);

//   console.log(newTryThis);


// Репета модуль 2, урок 3 
// вибрати найменший 
// const numbers = [51, 18, 13, 24, 7, 65];
// let bigllestNumber = numbers[0];
// for (const number of numbers) {
//     if (number > bigllestNumber) {
//         bigllestNumber = number;
//     }
// }
// console.log(`bigllestNumber:`, bigllestNumber);
// вибрати найбільший
// const numbers = [51, 18, 13, 24, 7, 65];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(`smallestNumber:`, smallestNumber);

// поставити кому і відріз(ати з останнього елементу кому
// const fruits = ["apple", "plum", "pear", "orange"];

// const string = fruits.join(`, `);
// console.log(string);

// до верхнього регістру маленькі букви до нижнього великі букви

// const string = `javaScript`;
// const letters = string.split(``);
// let invertedString = ` `;
// for (const letter of letters) {
//     console.log(letter);

//     invertedString +=
//         letters === letter.toLowerCase()
//             ? letter.toLowerCase()
//             : letter.toLowerCase();
// }
// console.log(`invertedString:`, invertedString);

// задача
// const title = `Top 10 binefist of Recet frenwork`;
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(` `);
// const slug = words.join(`-`);
// const slug1 = title.toLowerCase().split(` `).join(`-`);
// console.log(slug1);

// задача
// написати метод який рахує суму
// const array1 = [1, 10, 15, 28];
// const array2 = [20, 30, 40];
// let total = 0;
// const numbers = array1.concat(array1);
// for (const number of numbers) {
//     total += number;
// }
//  console.log(total);  

// //задача
// const carts = [
//     `Карточка-1`,
//     `Карточка-2`,
//     `Карточка-3`,
//     `Карточка-4`,
//     `Карточка-5`,
// ]
// console.table(carts);

// const cartToRemuve = `Карточка-5`;
// const index = carts.indexOf(cardToRemuve);
// carts.slice(index, 1);
// console.log(index);



// 4модуль конспект
// const printMessage = function (message) {
//     console.log(message);
// };

// const higherOrderFunction = function (callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
// };

// higherOrderFunction(printMessage);

// // 
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

// 
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// 
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// 
// const filter = function (array, test) {
//   for (const element of array) {
//     test(element);
//   }
// };


// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); 

// 
// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();

// 
// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

// 
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie'); // Mango is cooking apple pie
// makeDish('Mango', 'fish'); // Mango is cooking fish
// makeDish('Mango', 'beef stew'); // Mango is cooking beef stew

// makeDish('Poly', 'muffins'); // Poly is cooking muffins
// makeDish('Poly', 'pork chops'); // Poly is cooking pork chops
// makeDish('Poly', 'roast beef'); // Poly is cooking roast beef


// Петя бежит быстро, потому что Петя пытается поймать поезд.
// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

// function fn() {
//   console.log(this);
// }

// fn(); // window без "use strict" и undefined с "use strict"

// 
// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// 
// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = () => {
//       /*
//        * Стрелки запоминают контекст во время объявления,
//        * из родительской области видимости
//        */
//       console.log('this in fn: ', this);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}

// const hotel = {
//   name: 'Resort hotel',
//   showThis: function showThis() {
//     /*
//      * Контекст для стрелки сохраняется
//      * и передается из внешней области видимости
//      */
//     const context = this;

//     const fn = function fn() {
//       // А тут используется
//       console.log('this in fn: ', context);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}


// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));


// console.log(greet.call(motel, 'Poly', 4));

// 
// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.apply(hotel, ['Mango', 5]));
// // "Mango, welcome to 5-star Resort Hotel!"

// console.log(greet.apply(motel, ['Poly', 4]));
// // "Poly, welcome to 4-star Sunlight Motel!"

// 
// const greet = function (guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// hotelGreeter(); // "Mango, welcome to Resort Hotel!"


// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };
// const fn = function (callback) {
//   callback();
// };

// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
    
  // твой код
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
    
    // Напиши функцию findBestEmployee(employees), которая
    // принимает объект сотрудников и возвращает имя самого
    // продуктивного(который выполнил больше всех задач).
    // Сотрудники и кол - во выполненых задач содержатся как свойства 
    // объекта в формате "имя": "кол-во задач".

//     const findBestEmployee = function (employees) {
//         const value = Object.values(employees);
//         const max = Math.max(...values);

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого
// объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
    
        
//     }
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// 
// onst products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
    
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// 
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.




// function Person(obj) {  
//   const { firstName, lastName, age, gender, interests } = obj;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// }

// Person.prototype.greeting = function () {
//   console.log(`Привет я ${this.firstName} ${this.lastName}`);
// };

// Person.prototype.bio = function () {
//   console.log(
//     `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//   );
// };

// const user = new Person({
//   firstName: "Bob",
//   lastName: "Dou",
//   age: 21,
//   gender: "male",
//   interests: "football",
// });
// console.log(Person.prototype);

// const user2 = new Person({
//   firstName: "Jack",
//   lastName: "Dou",
//   age: 35,
//   gender: "male",
//   interests: "basketball",
// });

// let arr = [];
// console.log(`arr`, arr);



// function Teacher(obj) {
//   const { subject } = obj;
//   // this = {}
//   Person.call(this, obj);
//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//   console.log("I am teacher method");
// };

// const teacher1 = new Teacher({
//   firstName: "Bob",
//   lastName: "Dou",
//   age: 45,
//   gender: "male",
//   interests: "football",
//   subject: "Math",
// });

// console.log(`teacher1`, teacher1);
// teacher1.greeting();

// 4 модуль
// Задача на співбесіді
// const a = { };
// const b = { key:`b` };
// const c = {key: `c`};

// a[b] = 1;
// a[c] = 2;

// console.log(a[b]);

// function some(arr, callbec) {
//   for (let element of arr) {
//     let result = callbec(element);
//     if (result === true) {
//   result true;
//     }
//      }
//     result false;
// }
// const nambers = [1, 3, 5, 7, 9, 10];

// function checNumber(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// const array = [`1`, `2`, `3`];
// array.forEach(Element => console.log(Element));,буде - 1, 2 , 3


// const array = [1, 4, 9, 16];
// const map = array.map(x => x * 2);
// console.log(map); перемножує нп два. вертає нову колекцію

// const array = [5, 12, 8, 130, 44];
// const found = array.find(element => element > 10);
// console.log(found);верене перше унікальне число 12 переше найдельше від 10,  верене 12.


// дз 6 модуля 1 заняття

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },

  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

// задача
//1 Найти год рождения Albert Einstein
// Розвязок

// 1// можна функцією написати
// const findDataOfBirth = (name, lastName, arr) => {
//   const result = arr.find(
//     (scientists) => scientists.name === name && scientists.surname === lastName);
//   // return result ? result.born: 'Такой юзер не найден';\
//   // або
//   return result?.born ?? 'Такой юзер не найден';
// };
// console.log(findDataOfBirth('Albert', 'Einstein', scientists));


// 2
// const findDataOfBirth = (name, lastName, arr) => 
//  arr.find(
//     (scientists) => scientists.name === name && scientists.surname === lastName).born;

// console.log(findDataOfBirth('Albert', 'Einstein', scientists));

// 3
// const found = scientists.find((scientists) => scientists.name === 'Albert' && scientists.surname === 'Einstein');

// console.log(found.born);

// задачв
// 2 Узнать все ли ученые работала в 19 ст

// const result = scientists.every(
//   (scientists) =>
//     scientists.born >= 1800 && scientists.born && scientists.born > 1900);
// console.log(`result`, result);

// Модуль 6 ІІ заняття

//  Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.

// const prices = [2, 14, 1, 37, 26, 8];
// const pricesInAscendingOrder = [...prices].sort((a, b) => a - b);
// const pricesInDescendingOrder = [...prices].sort((a, b) => b - a);

// console.log(`pricesInAscendingOrder`, pricesInAscendingOrder);
// console.log(`pricesInDescendingOrder`, pricesInDescendingOrder);

// // console.log(`arr`, [...prices]);

// Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// const itemsInAlphabeticalOrder = [...items].sort((a, b) => (a > b ? 1 : -1));
// const itemsInDescAlphabeticalOrder = [...items].sort((a, b) =>
//   a > b ? -1 : 1
// );

// console.log(`itemsInAlphabeticalOrder`, itemsInAlphabeticalOrder);
// console.log(`itemsInDescAlphabeticalOrder`, itemsInDescAlphabeticalOrder);


// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap((course) => course.topics);
// console.log(`allTopics`, allTopics);
// const uniqueTopics = allTopics.filter(
//   (topic, index, arr) => arr.indexOf(topic) === index
// );
// console.log(`uniqueTopics`, uniqueTopics);


// async function getData() {
//   let result = null;
//   let response = await fetch("https://restcountries.eu/rest/v2/all");
//   result = await response.json();
//   return result;
// }

// // getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));

// const arr = JSON.parse(localStorage.getItem("arr"));
// console.log(arr);

// // Получить стрыны из региона Europe
// // Получить название самой большой страни в Европе
// // Получить название самой маленькой страни в Европе
// // Получить список стран с которыми граничит Швейцария (Switzerland)
// // Получить процент который занимает  Австрия  в мире

// const REGIONS = {
//   EUROPE: "Europe",
//   ASIA: "Asia",
// };

// const findCountryByRegion = (countries, region) =>
//   countries.filter((country) => country.region === region);
// // .map((country) => country.name);

// const countriesInEurope = findCountryByRegion(arr, REGIONS.EUROPE);

// const findLargestAndSmallestCountries = (countries) => {
//   const sortedCouytriesList = [...countries].sort((a, b) => b.area - a.area);
//   return {
//     max: sortedCouytriesList[0],
//     min: sortedCouytriesList[sortedCouytriesList.length - 1],
//   };
// };

// console.log(`result `, findCountryByRegion(arr, REGIONS.EUROPE));
// console.log(
//   "min and max countries",
//   findLargestAndSmallestCountries(countriesInEurope)
// );

// const findCountryByName = (contryName, countries) =>
//   countries.find((country) => country.name === contryName);

// const borders = findCountryByName("Switzerland", arr).borders;

// const bordersCountries = (countries, borders) =>
//   countries
//     .filter((country) => borders.includes(country.alpha3Code))
//     .map((country) => country.name);

// console.log(`bordersCountries`, bordersCountries(countriesInEurope, borders));
// // function findBorders(countryName, countryArray) {
// //   const countryCode = countryArray.find(
// //     (el) => el.name === countryName
// //   ).alpha3Code;
// //   console.log(countryCode);
// //   const result = countryArray
// //     .filter((el) => el.borders.includes(countryCode))
// //     .map((el) => el.name);
// //   return result;
// // }

// // console.log(findBorders("Switzerland", arr));

// for (let i = 0; i < 6; i++) { //! Эту строку можно изменить
//  for (let j = 0; j < 5; j ++) {
//    if (i === 5 && j === 5) {
//      //! Эту строку можно изменить
//    }
 
//    console.log(i, j);
//  }
// }

