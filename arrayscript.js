//Өгөгдсөн array - ийн гишүүдийн нийлбэрийн дундажыг ол
// const numbers = [10, 20, 30, 40, 50, 60];
// let average;
// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
//   average = sum / numbers.length;
// }
// console.log(average);

//Array-ын сүүлийн element-ийг солих

// const numbers = [10, 20, 30, 40, 50];
// numbers.push(90);
// numbers.unshift(90);
// numbers.shift();
// // numbers.push(90);

// console.log(numbers);

//Эерэг тэгш тооны нийлбэрийг олох .

// let numbers = [2, -3, 5, 6, -8, 10];
// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0 && numbers[i] % 2 == 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

//Массив доторх хамгийн их нийлбэртэй дэд массивыг ол

// let numbers = [1, -2, 3, 4, -1, 2, 1, -5, 4];
// let dedmasivNumber = 0;
// let maxNumber;
// for (i = 0; i < numbers.length; i++) {
//   dedmasivNumber = Math.max(numbers[i], dedmasivNumber + numbers[i]);
//   maxNumber = Math.max(dedmasivNumber, maxNumber);
//   return maxNumber;
// }
// console.log(maxNumbers);

// let numbers = [2, 4, 5, 6, 7];
let a = 4;
let b = 9;
let c = 22;
let maxNumber = Math.max(a, b, c);
console.log(maxNumber);
