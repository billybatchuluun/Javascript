// let num=100;
// while(num>0){console.log(num);
// num--}

// let num=0;
// do{num++;
// console.log(num);} while (num<50);

// let passcode;
// do{ passcode=prompt("please enter you password");
// } while (passcode!=="sesame");
// alert("Access granted") ;

// for(let num=0; num<10; num++){alert.log(num)}

// let sum=0;
// let num=prompt("enter any number")
// for(i=1; i<=num; i++){if(i%2==0){sum=sum+i}} alert(sum)

// let sum=0;
// let n=prompt("enter any number");
// for(let i=0; i<=n; i++) {sum+=i};
// alert(sum)

//ugugdsun toonii heden zereg 100 ih ve?

// let n=prompt("enter any number");

//1-1000 хүртэлх тэгш тоонуудын нийлбэрийг ол.
// let sum=0;
// for(i=2; i<=1000; i++){if(i%2==0){sum=sum+i}} {console.log(sum)}

// let a=prompt("enter any number")
// let b=prompt("enter any number")
// if (a>b)

// let a = prompt("please enter number")
// let result="";
// // for(i=1; i<=a; i++){result+="*"; console.log(result)}
// for(let i = 1; i <= a; i++) {
//     let str = "";
//     if(i % 2 === 0) {
//         console.log("tegsh too shuu");
//     } else {
//         console.log("sondgoi too shuu");
//     }

// }

// do {
//     console.log("object");
// }

// let a = 5;
// for (let i = 5; i > 0; i--) {
//   // 4
//   let row = "";
//   for (let j = i; j > 0; j--) {
//     // 0

//     row += "* "; // "* * * * * "
//   }
//   console.log(row);
// }

// let a = prompt("Please enter number");
// for (let i = a; i > 0; i--) {
//   let row = "";
//   for (let j = i; j > 0; j--) {
//     row += "*";
//   }
//   console.log(row);
// }

// let a = prompt("Please enter number");
// let row = "";
// for (let i = 1; i <= a; i++) {
//   row += "*";

//   console.log(row);
// }

// let a = prompt(" hed ve");
// let b = prompt(" hed ve");
// let result = 0;
// for (let num = 0; num <= Math.min(a, b); num++) {
//   if (a % num == 0 && b % num == 0) {
//     result = num;
//   }
// }
// alert(result);

//a, b тооны ХИЕХ-ийг ол. ХИЕХ гэдэг нь a,b тоог хоёуланг нь хувааж чаддаг хамгийн их тоо юм.

// let a = prompt("Please enter 1st number");
// let b = prompt("Please enter 2nd number");
// let min;
// let i = 1;
// if (a > b) {
//   min = b;
// } else {
//   min = a;
// }
// while (i <= min) {
//   if (a % i == 0 && b % i == 0) {
//     sum = i;
//   }
//   i++;
// }
// console.log(i);

// for (let i = 1; i <= 10; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// function greet(givinname, surname) {
//   return "Hello, there!" + givinname + surname;
// }
// const formattedGreeting = greet("Billy", "Batch");
// console.log(formattedGreeting.toUpperCase);

// function findxcube(x) {
//   return x ** 3;
// }
// let input = prompt("toogoo oruulna uu");
// alert(findxcube(input));

// functionfindxcube(x){
//   const cube=x**3;
//   console.log(cube)
// }
// findxcube(3)

// function findXCube(x) {
//   const cube = x ** 3;
//   return cube;
// }
// console.log(findXCube);

//Өгөгдсөн 2 тооны ихийг олох функц бич

// function findBigSmall(x, y) {
//   let big = 0;
//   if (x > y) {
//     big = x;
//   } else if (y > x) {
//     big = y;
//   }
//   return big;
// }
// console.log(findBigSmall(8, 7));
// let x = prompt("toogoo oruulna uu");
// let y = prompt("toogoo oruulna uu");

// function findhighestNumber(x, y) {
//   let big = 0;

//   if (x > y) {
//     big += x;
//   } else if (y > x) {
//     big += y;
//   }
//   return big;
// }

//Ugsun toonii baktral ol
// let num = prompt("toogoo oruulna uu");
// function findurjver(num) {
//   let urjver = 1;
//   for (i = num; i > 0; i--) {
//     urjver = urjver * i;
//   }
//   console.log(urjver);
// }

// findurjver(num);

// console.log(findhighestNumber(Number(x), Number(y)));

//Тэгш тоо  байгаа эсэхийг шалгах функц бич
// let num = prompt("toogoo oruulna uu");
// let answer = "tegsh too";

// function findevennumber(num) {
//   if (num % 2 == 0) {
//     return `tegsh too mun ${num}`;
//   } else return `sondgoi too ${num}`;
// }

// console.log(findevennumber(num));

//Өгөгдсөн array - ийн дундажыг олох функц бич
// let num1 = prompt("toogoo oruulna uu");
// let num2 = prompt("toogoo oruulna uu");
// let num3 = prompt("toogoo oruulna uu");
// let num4 = prompt("toogoo oruulna uu");
// let average;
// function averageOfNumbers(num1, num2, num3, num4) {
//   average = (num1 + num2 + num3 + num4) / 4;
// }
// return average;

// console.log(sumOfNumbers);

// const numbers = [10, 20, 30, 40, 50, 60]; //5
// let sum = 0;
// let average;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(i, numbers[i]);
//   sum += numbers[i];
// }
// average = sum / numbers.length;
// console.log(average);

//suuliin element hasah bolon nemeh

// const numbers = [10, 20, 30, 40, 50, 60];
// numbers.pop();
// numbers.push(80);
// console.log(numbers);

// tegsh bolon eyreg toonuudiin niilber
// const numbers = [2, -3, 5, 6, -8, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0 && numbers[i] > 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

//fibanocci iin bodlogo
// var i;
// const n = 100;
// const fib = [0, 1];
// for (let i = 1; i <= n; i++) {
//   fib.push(fib[i] + fib[i - 1]);
// }
// console.log(fib);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let insert = 3;
// let emptyArr = [];

// for (let i = 0; i < numbers.length / insert; i++) {
//   emptyArr.push(numbers.slice(i * insert, i * insert + insert));
// numbers.slice(0, 3)
// emptyArr.slice(3, 6)
// }

// console.log(emptyArr);

// const array = [1, 2, 4, 0, 34, 8];
// for (let i = 1; i < array.length; i++) {`
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       console.log();
//     }
//   }
// }

// const nums = [5, 4, 8, 2, 1, 20];

// for (let i = 0; i < nums.length; i++) {
//   let reserve = 0;
//   for (let k = i + 1; k < nums.length; k++) {
//     if (nums[i] > nums[k]) {
//       reserve = nums[i];
//       nums[i] = nums[k];
//       nums[k] = reserve;
//     }
//   }
// }
// console.log(nums);

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherld: 1,
    date: "2022-11-01",
  },
  {
    productName: "Bread",
    unitPrice: 1000,
    amount: 100,
    totalPrice: 100000,
    casherld: 2,
    date: "2022-11-01",
  },
  {
    productName: "Vegitables",
    unitPrice: 6000,
    amount: 300,
    totalPrice: 1800000,
    casherld: 3,
    date: "2022-11-01",
  },
  {
    productName: "Noodle",
    unitPrice: 600,
    amount: 1000,
    totalPrice: 600000,
    casherld: 1,
    date: "2022-11-01",
  },
  {
    productName: "Tea",
    unitPrice: 100,
    amount: 500,
    totalPrice: 10000,
    casherld: 3,
    date: "2022-11-01",
  },
  {
    productName: "Soda",
    unitPrice: 500,
    amount: 1000,
    totalPrice: 500000,
    casherld: 3,
    date: "2022-11-01",
  },
  {
    productName: "Soda",
    unitPrice: 500,
    amount: 1000,
    totalPrice: 500000,
    casherld: 2,
    date: "2022-11-01",
  },
  {
    productName: "Flour",
    unitPrice: 200,
    amount: 700,
    totalPrice: 1400000,
    casherld: 5,
    date: "2022-11-01",
  },
  {
    productName: "Rice",
    unitPrice: 450,
    amount: 200,
    totalPrice: 900000,
    casherld: 5,
    date: "2022-11-01",
  },
  {
    productName: "Meat",
    unitPrice: 1500,
    amount: 200,
    totalPrice: 300000,
    casherld: 5,
    date: "2022-11-01",
  },
  {
    productName: "Pickles",
    unitPrice: 150,
    amount: 1000,
    totalPrice: 150000,
    casherld: 1,
    date: "2022-11-01",
  },
  {
    productName: "Flour",
    unitPrice: 200,
    amount: 700,
    totalPrice: 1400000,
    casherld: 5,
    date: "2022-11-01",
  },
  {
    productName: "Oil",
    unitPrice: 2500,
    amount: 100,
    totalPrice: 250000,
    casherld: 2,
    date: "2022-11-01",
  },
  {
    productName: "Salt",
    unitPrice: 50,
    amount: 2000,
    totalPrice: 10000,
    casherld: 3,
    date: "2022-11-01",
  },
  {
    productName: "Sugar",
    unitPrice: 100,
    amount: 3000,
    totalPrice: 30000,
    casherld: 4,
    date: "2022-11-01",
  },
  {
    productName: "BottleWater",
    unitPrice: 100,
    amount: 10000,
    totalPrice: 100000,
    casherld: 5,
    date: "2022-11-01",
  },
  {
    productName: "Cookies",
    unitPrice: 30,
    amount: 10000,
    totalPrice: 300000,
    casherld: 2,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 10,
    amount: 20000,
    totalPrice: 200000,
    casherld: 3,
    date: "2022-11-01",
  },
  {
    productName: "Gas",
    unitPrice: 1500,
    amount: 2000,
    totalPrice: 300000,
    casherld: 4,
    date: "2022-11-01",
  },
  {
    productName: "Beer",
    unitPrice: 4500,
    amount: 20000,
    totalPrice: 900000,
    casherld: 5,
    date: "2022-11-01",
  },
];

// console.log(data);

// var totalPrice = totalPrice++;
// console.log(sum);

// console.log("data", data[2].totalPrice);
// console.log("data", data[3].totalPrice);
// console.log("data", data[4].totalPrice);
// console.log("data", data[5].totalPrice);

// Нийт борлуулалтын дүнг тооцоолох.
// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//   sum = sum + data[i].totalPrice;
// }
// console.log("Нийт борлуулалтын дүнг", sum);

//Нийт борлуулагдсан барааны тоог тооцоолох.
// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//   sum = sum + data[i].amount;
// }
// console.log("Нийт барааны тоог", sum);

//Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

// var monst5soldProduct = 0;
// for (let i = 0; i < data.length; i++) {
//   for (let j = i; j < data.length; j++)
//     if (data[i].totalPrice > data[j].totalPrice) {
//       var x = data[i].totalPrice;
//       data[i].totalPrice = data[j].totalPrice;

//       data[j] = x;
//     }
// }
// console.log(data[0].totalPrice);
// console.log(data[1].totalPrice);
// console.log(data[2].totalPrice);
// console.log(data[3].totalPrice);
// console.log(data[4].totalPrice);

//4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.

// let cars = [];
// const payPerHour = 1000;
// const payFirstThirtyMinutes = 0;

// const formatDate = (date) => {
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
// };

// console.log("2023-07-10, 13:15:00");
// const date = new Date("2023-11-01T12:15:00");
// // console.log("date", new Date("2015-03-25T12:00:00Z"));
// console.log("hours", date.getHours());
// console.log("minutes", date.getMinutes());

// let startinsert = new Date("October 21, 2023 13:15:00");
// let finishinsert = new Date("October 21, 2023 14:45:30");
// let starthour = startinsert.getHours();
// let startminutes = startinsert.getMinutes();
// let finishhour = finishinsert.getHours();
// let finishminutes = finishinsert.getMinutes();
// let startseconds = startinsert.getSeconds();
// let finishseconds = finishinsert.getSeconds();
// let durationminutes =
//   (finishhour - starthour) * 60 +
//   (finishminutes - startminutes) +
//   (finishseconds - startseconds) / 60;

// function payment(x) {
//   if (x % 60 <= 30) {
//     return Math.floor(x / 60) * 1000;
//   } else {
//     return (Math.floor(x / 60) + 1) * 1000;
//   }
// }

// console.log(payment(durationminutes));

const numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
  console.log(getSum);
}
