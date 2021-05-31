// переша задача
// Объявление переменных
// Переменные используются для хранения данных и состоят из идентификатора (имени) и области в памяти, где хранится их значение. Переменную можно представить как коробку с надписью (именем), в которой что-то лежит (значение).

// <ключевое слово> <имя переменной> = <значение>
// Объявление переменной начинается с ключевого слова const. Такая переменная должна быть сразу инициализирована значением, после чего его нельзя переопределить.

// Внимание
// Создание переменной без ключевого слова const приведёт к ошибке.

// const age = 20;
// const username = "Mango";
// const socialProfileTag = "@gluck";
// const totalWorkerSalary = 4052;
// В JavaScript имя перенной записывается в camelCase-нотации. Первое слово пишется строчными буквами, а каждое последующее начинается с заглавной. Имена чувствительны к регистру, то есть переменные user, usEr и User различны.

// Задание
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000
// Тесты
// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 2000

// розвязок
// const productName = "Droid";

// console.log(productName);
// 'Droid'

// const pricePerItem = 2000;

// console.log(pricePerItem);
// 2000


// друга задача
// Переопределение значения переменной
// Для того, чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово let. Создание переменной без ключевого слова let или const приведёт к ошибке.

// let age = 5;
// age = 10;

// let username = "Mango";
// username = "Poly";
// Попытка обратиться к переменной по имени до её объявления вызовет ошибку.

// Например, нельзя пытаться прочитать или изменить значение переменой до ее объявления:

// // ❌ Неправильно, будет ошибка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// // Объявление переменной age
// let age = 20;

// // ✅ Правильно, обращаемся после объявления
// age = 25;
// console.log(age); // 25
// Задание
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// Тесты
// Переменная pricePerItem объявлена с помощью let
// При объявлении переменной pricePerItem присвоено значение - число 2000
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// Переменная productName объявлена с помощью let
// При объявлении переменной productName присвоено значение - строка "Droid"
// Переменной productName присвоено новое значение - строка "Repair droid"

// let productName = "Droid";
// let pricePerItem = 2000;

// розвязок
// let productName = "Droid";
// productName = "Repair droid";
// let pricePerItem = 2000;
// pricePerItem = 3500;


// // третя задача
// Типы примитивов (числа, строки, були)
// В JavaScript переменная не ассоциируется с каким-либо типом данных, тип есть у её значения. То есть переменная может хранить значения разных типов.

// Number - целые числа и числа с плавающей запятой (точкой).
// String - строки, последовательность из нуля или более символов. Строка начинается и заканчивается одиночной ' или двойными кавычками ".
// Boolean - логический тип данных, флаги состояния. Всего два значения: true и false. Например, на вопрос включен ли свет в комнате можно ответить да (true) или нет (false).
// // Числа
// const age = 20;
// const salary = 3710.84;

// // Строки
// const name = "Mango";
// const description = "JavaSript essentials";

// // Були
// const isModalOpen = true;
// const isLoggedIn = false;
// Задание
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.
// Тесты
// Объявлена переменная topSpeed
// Значение переменной topSpeed это число 160
// Объявлена переменная distance
// Значение переменной distance это число 617.54
// Объявлена переменная login
// Значение переменной login это строка "mango935"
// Объявлена переменная isOnline
// Значение переменной isOnline это буль true
// Объявлена переменная isAdmin
// Значение переменной isAdmin это буль false

// розвязок
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
// Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// Тесты
// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"
// 
// function checkStorage(available, ordered) {
//   let message;
//  message = ordered > available ? "Not enough goods in stock!": "The order is accepted, our manager will contact you";
//   return message;
// }

// 26 задача
// Задание
// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".
// Тесты
// Объявлена функция checkPassword(password)
// Использован тернарный оператор
// Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
// Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
// Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password == ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }


// 27 задача
// Задание
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// Тесты
// Объявлена функция getSubscriptionPrice(type)
// Вызов getSubscriptionPrice("professional") возвращает число 20
// Вызов getSubscriptionPrice("organization") возвращает число 50
// Вызов getSubscriptionPrice("starter") возвращает число 0

// розвязок
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter" : // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// 28 задача
// Задание
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// Тесты
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   return message;
// }

// розвязок
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// switch(password){
//   case (password = null):
//     message = "Canceled by user!";
//     break;
//   case (password = ADMIN_PASSWORD):
//     message = "Welcome!";
//     break;
//   default:
//     message = "Access denied, wrong password!";
// }
//   return message;
// }

// 29 задача
// Задание
// Функция getShippingCost(country) должна проверять
// возможность доставки товара в страну пользователя(параметр country)
// и возвращать сообщение о результате хранящееся в переменной message.
// Обязательно используй инструкцию switch.

// Формат возвращаемой строки
// "Shipping to <country> will cost <price> credits",
//   где вместо < country > и < price >
//     необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// Тесты
// Объявлена функция getShippingCost(country)
// В теле функции использована инструкция switch
// Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
// Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
// Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
// Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
// Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
// Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;

//   return message;

//   // розвязок
//   function getShippingCost(country) {
//   let message;
  
//   switch(country) {
//       case `China`: 
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;
//         case `Chile`: 
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;
      
//      case `Australia`: 
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`; 
//     break;
//       case `Jamaica`:
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;
    
// default:
//    message = "Sorry, there is no delivery to your country";
//   }     
//   return message;
// }

// 30 задача
// Длина строки
// Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

// const productName = "Repair droid";

// // Если в переменной хранится строка
// console.log(productName.length); // 12

// // Если строковый литерал
// console.log("Repair droid".length); // 12
// Задание
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// Тесты
// Объявлена функция getNameLength(name)
// Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"

// function getNameLength(name) {
//   const message = `Name ${} is ${} characters long`; // Change this line

//   return message;
// }

// розвязок
// function getNameLength(name) {
//   const message = `Name ${name} is ${name. length} characters long`; // Change this line

//   return message;
// }

// 31 задача
// Индексация элементов строки
// Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.

// Индексация элементов строки начинается с нуля. Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.

// Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"
// Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// Тесты
// Объявлена переменная courseTopic
// Значение переменной courseTopic это строка "JavaScript essentials"
// Объявлена переменная courseTopicLength
// Значение переменной courseTopicLength это число 24
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"

// const courseTopic = "JavaScript essentials";


// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// 32 задача
// Метод slice()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Тесты
// Объявлена функция getSubstring(string, length)
// Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
// Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
// Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
// Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
// Вызов функции getSubstring("Hello world", 0) возвращает ""

// function getSubstring(string, length) {
//   const substring = ; // Change this line
// }
//   return substring;
// // розвязок
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// 33 задача
// Задача: форматирование сообщения
// Задание
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
// Тесты
// Объявлена функция formatMessage(message, maxLength)
// Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
// Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   /// Change code above this line
//   return result;
// }

// розвязок
// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     result = message;
//   }
//   else if(message.length >= maxLength){
//             result = message.length <= maxLength ? message : message.slice(message, maxLength) + '...';
//   }
 
//   return result;
// }

// 34 задача
// Методы toLowerCase() и toUpperCase()
// Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false
// Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// Задание
// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// Тесты
// Объявлена функция normalizeInput(input)
// Вызов функции normalizeInput("Hello world") возвращает "hello world"
// Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
// Вызов функции normalizeInput("Big SALE") возвращает "big sale"

// function normalizeInput(input) {
//   const normalizedInput = ; // Change this line

//   return normalizedInput;
// }

// розвязок
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));  

// 35 задача
// Метод includes()
// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("driod")); // true
// console.log(productName.includes("Driod")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false
// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Тесты
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
// Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
// Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false

// function checkForName(fullName, name) {
//  const result = ; // Change this line
//   return result;
// }
// розвязок
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// 36 задача
// Задача: проверка спама
// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam("Latest technology news") возвращает false
// Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
// Вызов функции checkForSpam("Get best sale offers now!") возвращает true
// Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
// Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
// Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
// Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true

// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   // Change code above this line
//   return result;
// }

// // розвязання
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// result = message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`) ? true: false;
//   // Change code above this line
//   return result;
// }
