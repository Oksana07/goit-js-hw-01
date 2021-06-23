// 5
// function Car(brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const audi = new Car('Audi', 'Q3', 36000);
// console.log(audi);

// const bmw = new Car('BMW', 'X5', 58900);
// console.log(bmw);

// const nissan = new Car('Nissan', 'Murano', 31700);
// console.log(nissan);

// 5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () { 
//  return this.price;
// }

// Car.prototype.changePrice = function (newCar) {
// this.price = newCar;
// }

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi.getPrice()); 
// console.log(audi.changePrice()); 


// 6
// function Storage(items) {
//   this.items = items;
//   Storage.prototype.getItems = function () {
//     return this.items;
//   };

//   Storage.prototype.addItem = function (newItem) {
//     return this.items.push(newItem);
//   };

//   Storage.prototype.removeItem = function (item) {
//     const itemsIndex = this.items.indexOf(item);
//     return this.items.splice(itemsIndex, 1);
//   };
// }


// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); 
// storage.addItem('Дроид');
// console.log(storage.getItems()); 
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); 

// 7
// function StringBuilder(baseValue ) {
//   this.value  = baseValue;
//   StringBuilder.prototype.getValue = function getValue() {
//     return this.value;
//   };
//   StringBuilder.prototype.padEnd = function (str) {
//     this.value = this.value + str;
//   };
//   StringBuilder.prototype.padStart = function
//   (str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function(str) {
//   this.value = str + this.value + str;
//  };
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



//  Вова задав на 5 модулі 1 урок
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
//   console.log(`Привет ${this.firstName} мне ${this.age} лет. Мне нравытса ${this.interests}`);
// };

// function Student(obj) {
//   Person.call(this, obj);
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.greeting = function () {
//   console.log("I am student GOIT");
// };

// const student1 = new Student({
//   firstName: "Oksana",
//   lastName: "Petrushyn",
//   age: 38,
//   gender: "women",
//   interests: "flowers and bake",
// });

// console.log(`student1`, student1);
// student1.greeting();

// 9
// class Car {
//   constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// 	}
// }
// const mango = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });


// 10
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}