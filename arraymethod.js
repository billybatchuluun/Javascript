//Өгөгдсөн object - ийг өсөх дарааллаар эрэмбэлcэн array буцаадаг функц бич.

// let num = { b: 2, a: 1, c: 3, d: 4 };

// console.log(Object.entries(num).sort());

// let num = { b: 2, a: 1, c: 3, d: 4 };

// console.log(Object.keys(num).sort());

// Овог нэр 2-ыг нийлүүлж бүтэн нэрийг харуулах.
// Овогийг том үсгээр харуулах.
// Овог эсвэл Нэр аль нэг нь байхгүй бол "Буруу утга оруулсан байна." буцаах.

// let user = {
//   firstName: "Micheal",
//   lastName: "Jordan",
// };
// let toUpperCase = user.firstName.toUpperCase();

// console.log(toUpperCase + lastName);

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(Object.values(user));

// const array = [1, 1, 1, 1, 1];
// array[0] = 5;
// array[1] = 5;
// array[2] = 5;
// array[3] = 5;
// array[4] = 5;
// console.log(array);

// const array = [1, 1, 1, 1, 1];
// let newArray = 5;
// num = 5;
// for (let i = 0; i < array.length; i++) {
//   array[i] = num;
// }

// console.log(num);

// const num = [
//   {
//     firstName: "Narantsatsralt",
//     lastName: "Bumnasan",
//     phoneNumber: "99111111",
//   },
//   { firstName: "Namkhai", lastName: "Bumnasan", phoneNumber: "99111111" },
//   { firstName: "Gundalai", lastName: "Bumnasan", phoneNumber: "99111111" },
//   { firstName: "Lkhamjav", lastName: "Bumnasan", phoneNumber: "99111111" },
//   { firstName: "Serik", lastName: "Bumnasan", phoneNumber: "99111111" },
// ];
// // for (let i = 0; i < num.length; i++) {
// //   console.log(num[i].firstName);
// // }

// console.log(array.map((el, i) => el.firstName));

//1. **Double the Numbers:**   Given an array of numbers, use the `map` method to create a new array where each number is doubled.

// const array = [1, 2, 3, 4, 5];

// const doubleArray = array.map((num) => num * 2);

// console.log(doubleArray);

//2. **Convert Temperatures:**   Create a function that takes an array of temperatures in Celsius and use `map` to convert them to Fahrenheit.
// const temperatures = [10, 20, 16, -1, 0];

// console.log(temperatures.map((celsium) => celsium * 1.8 + 32));

//3. **Square Roots:**   Given an array of numbers, use `map` to find the square root of each number and create a new array with the results.

// const numbers = [25, 36, 81];
// console.log(numbers.map(Math.sqrt));

// 4. **Uppercase Names:**   Given an array of names, use `map` to create a new array where each name is in uppercase.

// const array = ["Bilguun", "Bold", "Bataa"];
// // const upperCase = array.map((el) => el.toUpperCase());
// // console.log(upperCase);
// console.log(array.map((el) => el.toUpperCase()));

//5. **Extract Initials:**   Create a function that takes an array of full names and uses `map` to generate an array of initials (first letter of the first name and last name).### Task Set for `filter`:

// const num = [
//   {
//     firstName: "Narantsatsralt",
//     lastName: "Bumnasan",
//     phoneNumber: "99111111",
//   },
//   { firstName: "Namkhai", lastName: "Bumnasan", phoneNumber: "99111111" },
//   { firstName: "Gundalai", lastName: "Bumnasan", phoneNumber: "99111111" },
//   { firstName: "Lkhamjav", lastName: "Bumnasan", phoneNumber: "99111111" },
//   { firstName: "Serik", lastName: "Bumnasan", phoneNumber: "99111111" },
// ];

// console.log(num.map((el) => el.firstName[0] + "." + el.lastName));

// 6. **Even Numbers:**   Given an array of numbers, use the `filter` method to create a new array containing only the even numbers.

// const numbers = [23, 43, 55, 44, 34];
// console.log(numbers.filter((el) => el % 2 == 0));

//7. **Positive Numbers:**   Create a function that takes an array of numbers and uses `filter` to generate a new array containing only the positive numbers.

// const num = [3, 5, -2, -4];
// console.log(num.filter((el) => el > 0));

//8. **Long Words:**   Given an array of words, use `filter` to create a new array with only the words that have a length greater than a specified number.

// const array = ["rabbit", "dog", "lion", "bear", "elephant"];
// console.log(array.filter((el) => el.length > 4));

//9. **Prime Numbers:**   Create a function that takes an array of numbers and uses `filter` to generate a new array containing only the prime numbers.10. **Search by Starting Letter:**    Given an array of words, use `filter` to create a new array with only the words that start with a specific letter.

const number = [3, 5, 8, 34];
console.log(number.filter((el) => el));

//10. **Search by Starting Letter:**    Given an array of words, use `filter` to create a new array with only the words that start with a specific letter.
