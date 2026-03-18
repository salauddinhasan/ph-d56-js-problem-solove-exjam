// **Problem 1**
// ```
// 1 থেকে 10 পর্যন্ত print করো।

// Expected Output:
// 1
// 2
// 3
// ...
// 10
// ```


// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// **Problem 2**
// ```
// 1 থেকে 10 এর মধ্যে 
// শুধু জোড় সংখ্যা print করো।

// Expected Output: 2 4 6 8 10
// ```

// for(let i = 1; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }


// **Problem 3**
// ```
// const fruits = ["আম", "কলা", "লিচু", "পেয়ারা"];

// loop দিয়ে সব fruits print করো।
// ```

// const fruits = ["আম", "কলা", "লিচু", "পেয়ারা"];
// for( let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
 

// const fruits = ["আম", "কলা", "লিচু", "পেয়ারা"];
// for(let fruit of fruits) {
//     console.log(fruit)
// }
 
// const fruits = ["আম", "কলা", "লিচু", "পেয়ারা"];

// fruits.forEach(function(fruit) { 
//     console.log(fruit);
// })


// **Problem 4**
// ```
// 1 থেকে 10 পর্যন্ত সব সংখ্যার
// যোগফল বের করো।

// Expected Output: 55
// ```
// let sum = 0;
// for(let i = 0; i <= 10; i++) {
//       sum = sum + i
//     console.log(sum)
// }


// **Problem 5**
// ```
// while loop দিয়ে 
// 10 থেকে 1 পর্যন্ত উল্টো করে print করো।

// Expected Output:
// 10
// 9
// 8
// ...
// 1

// let i = 10;
// while( i >= 1) {
//     console.log(i)
//     i--
// }