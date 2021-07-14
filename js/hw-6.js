// 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
// orderedItems.forEach(function(v, i, orderedItems){totalPrice += orderedItems[i];})
  

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// // 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
     
//   numbers.forEach((number)=>{
//       if (number>value){
//          filteredNumbers.push(number)
//      }
//  }); 
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// // 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   firstArray.forEach(function(v, i, firstArray){ 
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
// }
  
// 4
// // Пиши код ниже этой строки
//   const calculateTotalPrice = (quantity, pricePerItem) =>{
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// // 5
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;
// // Пиши код выше этой строки

// 6
// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// 7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// 8
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }

// 9
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const result = [];
//       numbers.forEach(number => number % 2 === 0 ? result.push(number += value) : result.push(number));
//   return result;
//     // Пиши код выше этой строки
//   }

  // 10
//   const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths); 

// 11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(book => book.title);
// console.log(books);

// 12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(books => books.genres);
// console.log(books);

// 13
// const getUserNames = users => users.map(user => user.name);

// 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
// // виведення парних чисел
// const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);
// // виведенння непарних чисел
// console.log(evenNumbers);

// console.log(oddNumbers);

// 16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap((book) => book.genres);
//   const uniqueGenres = allGenres.filter(
//   (genres, index, books) => books.indexOf(genres) === index
// );
// console.log(allGenres);

// console.log(uniqueGenres);

// 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((books) => books.rating >= MIN_RATING);
// console.log(topRatedBooks); 

// const booksByAuthor = books.filter((books) => books.author === AUTHOR);
// console.log(booksByAuthor); 

// 20
// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((users) => users.friends.includes(friendName) );
// };
// Пиши код выше этой строки

// 21
// const getFriends = (users, friends) => {
//   const allFriends=users.flatMap(user=>user.friends);
//   return allFriends.filter((friend, index, users)=>users.indexOf(friend)===index)
// };

// 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18]; 
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(
//   (firstArray)=>
//   firstArray.numbers % 2 !== 0);
// const eachElementInFirstIsOdd = firstArray.every(
//   (firstArray)=>
//   firstArray.numbers % 2 === 0);

// const eachElementInSecondIsEven = secondArray.every(
//   (secondArray)=>
//   secondArray.numbers % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(
//   (secondArray)=>
//   secondArray.numbers % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(
//   (thirdArray)=>
//   thirdArray.numbers % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(
//   (thirdArray)=>
//   thirdArray.numbers % 2 === 0);

//   // 27 чи активні юзери
//   const isEveryUserActive = (users) => {
// const activeUsers = users.every(user => user.isActive);
// return  activeUsers
// };

// // 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(
//   (firstArray)=>
//   firstArray.numbers % 2 !== 0);
// const anyElementInFirstIsOdd = firstArray.some(
//   (firstArray)=>
//   firstArray.numbers % 2 === 0);

// const anyElementInSecondIsEven = secondArray.some(
//   (secondArray)=>
//   secondArray.numbers % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(
//   (secondArray)=>
//   secondArray.numbers % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(
//   (thirdArray)=>
//   thirdArray.numbers % 2 !== 0);
// const anyElementInThirdIsOdd = thirdArray.some(
//   (thirdArray)=>
//   thirdArray.numbers % 2 !== 0);


//   // 29
//   // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   const activeUsers = users.some(user => user.isActive);
// return  activeUsers 
// };
// // Пиши код выше этой строки

// 30
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки
// const totalPlayTime = playtimes.reduce((totalLikes, players) => totalLikes + players, 0);
// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// 31
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 }, 
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total,  players) => {
//   return total + players.playtime / players.gamesPlayed;
// }, 0);
// const averageScore = totalAveragePlaytimePerGame / players.length;
// console.log(totalAveragePlaytimePerGame);

// // 32
// const calculateTotalBalance = users => users.reduce((acc, user )=>  ( acc + user.balance ), 0);

// 33
// Дополни функцию getTotalFriendCount(users) так,
//   чтобы она считала и возвращала общее количество друзей(свойство friends)
// всех пользователей из массива users.

// const getTotalFriendCount = users => users.reduce((allfriend, user) => {
//   allfriend.push(...user.friends);
//   return allfriend;
// }, []).length;

// 34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// 35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a-b);
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort((a,b)=> b-a);
// console.log(descendingReleaseDates);

// 36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
//   console.log(authorsInAlphabetOrder);
//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
// console.log(authorsInReversedOrder);

// 37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки
// // якщо потрібно сортувати по алфавіту тоді використовуємо .localeCompare
// const sortedByAuthorName = [...books].sort((firstName,secondName)=>firstName.author.localeCompare(secondName.author));
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstName,secondName)=>secondName.author.localeCompare(firstName.author));
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((first,second)=>first.rating-second.rating)
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((first,second)=>second.rating-first.rating);
// console.log(sortedByDescentingRating);

// 38
// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//   return balance = [...users].sort((a,b)=> a.balance-b.balance);
// };

// 39
// Дополни функцию sortByDescendingFriendCount(users) так,
//   чтобы она возвращала массив пользователей отсортированный
// по убыванию количества их друзей(свойство friends).
// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => [...users].sort((a,b)=> b.friends.length - a.friends.length); 

 // 40
// const sortByName = users => 
//   [...users].sort((a, b) => a.name.localeCompare(b.name));

  // 41
//   const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
// .filter(books => books.rating > MIN_BOOK_RATING)
// .sort((firstBook, secondBook)=>firstBook.author.localeCompare(secondBook.author))
// .map((book)=>book.author)
// console.log(names);

// 42
// const getNamesSortedByFriendCount = (users) => {
//   return (userFriendsAmountUp = [...users]
//     .sort((firstName, secondName) => firstName.friends.length - secondName.friends.length)
//     .map((user) => user.name));
// };

// 43
// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//   return [...users] 
//     .flatMap((user)=>user.friends) 
//     .filter((friend,ind,arr)=>arr.indexOf(friend)===ind) 
//     .sort((a,b)=>a.localeCompare(b))
// };

// 44
// Дополни функцию getTotalBalanceByGender(users, gender) так,
//   чтобы она возвращала общий баланс пользователей(свойство balance),
//     пол которых(свойство gender) совпадает со значением параметра gender.
// Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//   .filter((user) => user.gender === gender)
//   .reduce((acc, user)=> acc + user.balance, 0)
// };
