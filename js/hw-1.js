// переша задача
// const productName = "Droid";

// console.log(productName);
// 'Droid'

// const pricePerItem = 2000;

// console.log(pricePerItem);
// 2000


// друга задача
// let productName = "Droid";
// productName = "Repair droid";
// let pricePerItem = 2000;
// pricePerItem = 3500;


// третя задача
// const topSpeed = 160;
// const distance = 617.54;
// let opSpeed = 160;
// let istance = 617.54;

// const login = "mango935";

// const isOnline = true;
// const isAdmin = false;

// шоста задача
// const pricePerDroid  = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// сьома задача
// function sayHi() {
  
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// восьма задача
// function add(a, b, c) {
//   console.log("Addition result equals 52");
//   console.log("Addition result equals 60");
//   console.log("Addition result equals 30");
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// девята задача
// function add(a, b, c) {
// return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// десята задача
// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }

// одинадцята задача
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// // дванадцята задача
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

// ТРИНАДЦЯТА ЗАДАЧА
// function isAdult(age) {
//   // Change code below this line
//  const passed = 20 >= 18;

//   // Change code above this line
//   return passed;
// }
// console.log(20 >= "18");

// function isAdult(age) {
//  const passed = 14 >= 18;
//   return passed;
// }
// console.log(14 >= "18");

// function isAdult(age) {
//  const passed = 8 >= 18;
//  return passed;
// }
// console.log(8 >= "18");

// function isAdult(age) {
//  const passed = 37 >= 18;
//   return passed;
// }
// console.log(37 >= "18");

// 
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;

// чотирнадцята задача
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }

// пятнадцята задача
// function checkAge(age) {
//   let message;
//   if (age >= "20") { 
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

// //   return message;
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// console.log(`qweqwe`)


// шістнадцята задача
// function checkStorage(available, ordered) {
//     let message;
  
//     if (ordered > available) {
//         message = `Not enough goods in stock!`

//     } else {
//         message = `Order is processed, our manager will contact you.`
//     }

//     return (message);
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);

// сімнадцята задача
// Задание
// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// Тесты
// Значение переменной a равно 7
// Использован оператор +=
// Значение переменной b равно 6
// Использован оператор -=
// Значение переменной c равно 45
// Использован оператор *=
// Значение переменной d равно 2
// Использован оператор /=
  
//   // Розвязок
  
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// вісімнадцята задача
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = `Insufficient funds!`;
//     } else {
//         totalPrice = customerCredits - totalPrice
//         message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
//     }
//     // Change code above this line
// return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// девятнадцята задача
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
// Тесты
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
// 
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if(password == null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password == ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;

  //  двадцята задача
//   Задача: склад товаров 2.0
// Задание
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".
// Тесты
// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(150, 0) возвращает "There are no products in the order!"

// function checkStorage(available, ordered) {
//   let message;
//   if(ordered === 0) {
//     message = "There are no products in the order!";
//   }
//   else if (available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
// }
//  return message;
// }
  
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 21 задача
// Задание
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция isNumberInRange(start, end, number)
// В выражении проверки использован оператор &&
// Вызов isNumberInRange(10, 30, 17) возвращает true
// Вызов isNumberInRange(10, 30, 5) возвращает false
// Вызов isNumberInRange(20, 50, 24) возвращает true
// Вызов isNumberInRange(20, 50, 76) возвращает false
// 
// function isNumberInRange(start, end, number) {
//   const isInRange = start < number && end > number; 
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// 22 задача
// Задание
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция checkIfCanAccessContent(subType)
// В выражении проверки использован оператор ||
// Вызов checkIfCanAccessContent("pro") возвращает true
// Вызов checkIfCanAccessContent("starter") возвращает false
// Вызов checkIfCanAccessContent("vip") возвращает true
// Вызов checkIfCanAccessContent("free") возвращает false

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; 

//   return canAccessContent;
// }

// 23 задача
// Задание
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Тесты
// Объявлена функция isNumberNotInRange(start, end, number)
// В выражении использован оператор !
// Вызов isNumberNotInRange(10, 30, 17) возвращает false
// Вызов isNumberNotInRange(10, 30, 5) возвращает true
// Вызов isNumberNotInRange(20, 50, 24) возвращает false
// Вызов isNumberNotInRange(20, 50, 76) возвращает true
//  
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
//

// 24 задача
// Задание
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// Тесты
// Объявлена функция getDiscount(totalSpent)
// Вызов getDiscount(137000) возвращает 0.1
// Вызов getDiscount(46900) возвращает 0.05
// Вызов getDiscount(8250) возвращает 0.02
// Вызов getDiscount(1300) возвращает 0
// Вызов getDiscount(5000) возвращает 0.02
// Вызов getDiscount(20000) возвращает 0.05
// Вызов getDiscount(50000) возвращает 0.1

// Розвязок
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// }
//   else if (totalSpent >= 20000 && 50000) {
//   discount = SILVER_DISCOUNT;
// } 
//    else if (totalSpent >= 5000 && 20000) {
//   discount = BRONZE_DISCOUNT;
// } 
//      else if (totalSpent < 5000) {
//   discount = BASE_DISCOUNT;
// } 
//   return discount;
// }

// 25 задача

