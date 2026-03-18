// //  **Problem 1**
// ```
// দুটো number নিয়ে যোগ করে return করো।
// console.log(add(5, 10)); // 15

// function add(num1, num2) {
//      return num1 + num2;
// }

// console.log(add(5, 10));



// **Problem 2**
// ```
// একটা number নিয়ে জোড় না বিজোড় return করো।
// console.log(checkNumber(7)); // "বিজোড়"
// ```

// function number(num) { 
//     if(num % 2 === 0) { 
//         console.log('Event');
//     } else{ 
//         console.log('Odd');
//     }
// }

// let result = number(8);
 


// **Problem 3**
// ```
// নাম নিয়ে "হ্যালো [নাম]" return করো।
// নাম না দিলে default "বস" হবে।
// console.log(greet());        // হ্যালো বস
// console.log(greet("Rahim")); // হ্যালো Rahim
// ```


// function greet(name) {
//     if(name) {
//         return `hello ${name}`
//     } else {
//          return `hello Boss `
//     }
// }

// console.log(greet());       
// console.log(greet("Rahim")); 


// **Problem 4**
// ```
// দুটো number নিয়ে বড়টা return করো।
// console.log(findMax(10, 25)); // 25
// ```

 
// function largestNumber(a, b) { 
//     if(a > b) {
//         return a;
//     } else{
//         return b;
//     }
// }

// console.log(largestNumber(10, 25));


// **Problem 5**
// ```
// Arrow function দিয়ে 
// একটা number এর square বের করো।
// console.log(square(6)); // 36

 

//  const square = (num) => num * num;
//  console.log(square(6));






// 🟡 Arrow Function — Concept



// **Problem 1**
// ```
// Arrow function দিয়ে দুটো number গুণ করো।
// console.log(multiply(4, 5)); // 20
// ```


// const  multiply = (a, b) => a * b;
// console.log(multiply (4, 5));


// **Problem 2**
// ```
// Arrow function দিয়ে 
// একটা number positive না negative বলো।
// console.log(checkNum(-5)); // "negative"
// ```

//  const checkNum = num => { 
//     if(num > 0) return 'positive'
//     return 'negative';
//  }

//  console.log(checkNum(-5));


// **Problem 3**
// ```
// Arrow function দিয়ে 
// array র সব number এর sum বের করো।
// console.log(getSum([1, 2, 3, 4, 5])); // 15
// ```

//  const getSum = (numbers) => { 
//     let sum = 0;
//     for(let num of numbers) {
//         sum = sum + num
        
//     }
//     return sum 
//  }
//  console.log(getSum([1, 2, 3, 4, 5,]));

// const getSum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0) 
// console.log(getSum([1, 2, 3, 4, 5]));

// **Problem 4**
// ```
// Arrow function দিয়ে 
// নাম নিয়ে বড় হাতে return করো।
// console.log(upperName("salauddin")); // "SALAUDDIN"
// hint: .toUpperCase() ব্যবহার 


//  const upperName = (name) => name.toUpperCase();
//  console.log(upperName('salauddin '));