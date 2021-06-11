// 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// // 8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
// name,
// price,
// image,
// tags
// };

// // 9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName] : "henry.carter@aptmail.com",

// [passwordInputName] : "jqueryismyjam",

//   // Change code above this line
// };


// 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// };


// 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
// }

// 12
// function countProps(object) {
//   let propCount = 0;
//   for (const item in object) {
//     if (object.hasOwnProperty(item)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// console.log(countProps({})); //0
// countProps({ name: "Mango", age: 2 }); //2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //3

// 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (key of keys) {
//   // Ключ
//   values.push(apartment[key]);
//   // Значение свойства
//   console.log(apartment[values]);
// }

// // 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//       propCount += key.length;
//     }
//   return propCount;
// }

// // 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })) // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

// function countTotalSalary(obj) {
//   let totalSalary = 0;
//   for (const salary of Object.values(obj)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }

// 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//  hexColors.push(color.hex);
//  rgbColors.push(color.rgb); 
// }

// 18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products){
//    if  (product.name === productName)
//   return product.price;
//     }
// return null;
//   // Change code above this line
// }

// 19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arr = [];
//  for (const product of products) {
//    if (product[propName]) {
//   arr.push(product[propName])
//     }
//  }
// return arr;
//   // Change code above this line
// }

// 20
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// // // розвязок
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let total = 0;
//   for (const product of products){
//     for (const key in product){
//       if (product.name === productName)
//         total = product.price * product.quantity
//     }
//   }
// return total;
//   // Пиши код выше этой строки
// }

// 21
// деструкруризація обєкта
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
// yesterday,
// today,
// tomorrow,
// icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(highTemperatures);

// 23
// Замени объявления переменных highYesterday,
// highToday, highTomorrow и highIcon одной
// операцией деструктуризации свойств объекта highTemperatures.Задай
// значение по умолчанию для highIcon -
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday,
//        today: highToday,
//        tomorrow: highTomorrow,
//        icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',} = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highTemperatures);

// 24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
	icon: "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
  },
};
console.log(forecast);
const {lowToday, highTomorrow} = forecast ;
const meanTemperature = (lowToday + highTomorrow) / 2;