// 2
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации
// Тесты
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }

// // розвязок
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";
//   // Change code above this line
// }

// 3 задача
// Задача: склад товаров 3.0
// Задание
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// Тесты
// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(70, 0) возвращает "Your order is empty!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(150, 0) возвращает "Your order is empty!"

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

// // розвязок
// function checkStorage(available, ordered) {
//     if (ordered === 0) {return "Your order is empty!";}
//    if (ordered > available) {return "Your order is too large, not enough goods in stock!";} 
//    return "The order is accepted, our manager will contact you";
//   }


// 6
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";
// console.table(fruits)



// // 8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1; 
// const lastElement = fruits[lastElementIndex];
// // Change code below this line


// 9
// function getExtremeElements(array) {
//   // Change code below this line
// const arr = array.splice(1, array.length-2)
// return array;

//   // Change code above this line
// }


// 10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// 11
// Задача: гравировка украшений
// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// розвязок
// function calculateEngravingPrice(message, pricePerWord) {
//    return message.split(` `).length*pricePerWord;
// }

// 12
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// // розвязок
// function makeStringFromArray(array, delimeter) {
//   let string = array.join(delimeter);
//   return string;
// }

// 13
// Задание
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// розвязок
// function slugify(title) {
//   // Change code below this line
// return title.toLowerCase().split(' ').join('-')
//   // Change code above this line
// }

// 14
// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// Розвязок
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// 15
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// розвязок
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];


// const allClients = oldClients.concat(newClients);

// 16
// Задача: композиция массивов
// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
// // розвязок
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let tempArr = [];
// let array = firstArray.concat(secondArray);
//   tempArr = (array.length > maxLength) ? array.slice(0, maxLength) : array.slice(0, array.length);
// return tempArr;
//     // Change code above this line
// }


// 17 
// Задание
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// розвязок
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18
// Задача: сумма чисел (цикл for)
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// // розвязок
// function calculateTotal(number) {
//  // Change code below this line
// let result = 0;
//   for (let i = 1; i <= number; i++)
//   {
//     result += i;
//   }
//   return result;

//   // Change code above this line
// }

// 19
// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// розвязок
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20
// Задача: подсчёт суммы покупки
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
// // розвязок
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// 
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for(let num of order) {
//    total += num
// }
//   // Change code above this line
//   return total;
// }

// 21
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// // розвязок
// function findLongestWord(string) {
//  var strSplit = string.split(` `);
//   var longestWord = ` `;
//   for(var i = 0; i < strSplit.length; i++) {
//     if(strSplit[i].length > longestWord.length) {
//       longestWord = strSplit[i];
//     }
//   }


// 22
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i)

//     }
//     // Change code above this line
//     return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// 23
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
// let result = [];
//   for(let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] > value) {
//      result.push(numbers[i]); 
//   }
// }
// return result;
// }

// 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//  console.log(fruits.includes("apple"));
//  console.log(fruits.includes("plum"));
//  console.log(fruits.includes("pear")); 
//  console.log(fruits.includes("orange"));  
}


// 25
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// function getCommonElements(array1, array2) {
//   // Change code below this line

//   const newArray = [];
// for (const element of array1) {
//  if(array2.includes(element)) {
//  newArray.push(element);
// //  }
// }
//  return newArray;

// }

// 26
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let value of order) {
//     total += value;
//   }

//   // Change code above this line
//   return total;
// }

// 27
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//  // Change code below this line
//  const filteredNumbers = [];
//  for (let number of numbers) {
//    if (number > value) {
//      filteredNumbers.push(number);
//    }
//  }
//  return filteredNumbers;
//  // Change code above this line
// } 

// 28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// 29
// Задача: чётные числа
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
// 
// function getEvenNumbers(start, end) {
//   const numbers = [];
  // for(let i = start; i <= end; i ++) {
  //   if(i % 2 === 0) {
  //     numbers.push(i);
  //   	}
  // 	}
  // return numbers;
  // }

  // 30
// адание оператор брейк
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
//   const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//      break;
//   }
// }

// 32
// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
// return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// 32
function includes(array, value) {
  let result;
for(let val of array) {
  console.log(val);
 if(val === value) {
  return true;
} else {
  result = false;
	}
}
return result;
}
console.log(includes([1,2,3,4,5],3));


