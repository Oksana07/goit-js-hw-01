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
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
let totalPrice = pricePerDroid * orderedQuantity;
 if (totalPrice > customerCredits) {
   message = "Insufficient funds!";
   }
  else {
    totalPrice = customerCredits - totalPrice;
   message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
}
consol.log(message);
  }
  makeTransaction(3000, 5, 23000);
  makeTransaction(1000, 3, 15000);
  makeTransaction(5000, 10, 8000);
  makeTransaction(2000, 8, 10000);
  makeTransaction(500, 10, 5000);