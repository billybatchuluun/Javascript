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
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       console.log();
//     }
//   }
// }

const nums = [5, 4, 8, 2, 1, 20];

for (let i = 0; i < nums.length; i++) {
  let reserve = 0;
  for (let k = i + 1; k < nums.length; k++) {
    if (nums[i] > nums[k]) {
      reserve = nums[i];
      nums[i] = nums[k];
      nums[k] = reserve;
    }
  }
}
console.log(nums);
