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


