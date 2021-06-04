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


const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = "apple";
const secondElement = "plum";
const lastElement = "orange";
console.table(fruits)
fruits[1] = `qweqwe`;
console.log(fruits);

console.log(fruits[2]);

const lastIndex = fruits.length - 1;

