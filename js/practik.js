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

//задача
const carts = [
    `Карточка-1`,
    `Карточка-2`,
    `Карточка-3`,
    `Карточка-4`,
    `Карточка-5`,
]
console.table(carts);

const cartToRemuve = `Карточка-5`;
const index = carts.indexOf(cardToRemuve);
carts.slice(index, 1);
console.log(index);

