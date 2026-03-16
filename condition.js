// **Problem 1**
// ```
// let temperature = 35;

// যদি temperature 30 এর বেশি হয় 
// → "গরম" print করো
// না হলে 
// → "ঠান্ডা" print করো
// ```


// let temperature = 35;
// if(temperature > 30) {
//     console.log("গরম")
// } else {
//     console.log("ঠান্ডা")
// }


// **Problem 2**
// ```
// let age = 20;

// যদি age 18 এর বেশি হয় 
// → "Vote দিতে পারবে"
// না হলে 
// → "Vote দিতে পারবে না"
// ```

// let age = 20;
// if(age > 18) { 
//     console.log("Vote দিতে পারবে");
// } else { 
//     console.log("Vote দিতে পারবে না")
// }



// **Problem 3**
// ```
// let marks = 55;

// 90 বা বেশি  → "A+"
// 80 বা বেশি  → "A"
// 70 বা বেশি  → "B"
// 60 বা বেশি  → "C"
// 60 এর কম   → "Fail"

// marks অনুযায়ী grade বের করো।

// let marks = 5;

// if(marks >= 90) {
//     console.log('A+')
// } else if(marks >= 80) { 
//     console.log('A');
// } else if(marks >= 70) { 
//     console.log('B');
// } else if(marks >= 60) {
//     console.log('C');
// } else{ 
//     console.log('Fail');
// }



// **Problem 4**
// ```
// let number = 7;

// number টা জোড় না বিজোড় বলো।
// (% ব্যবহার করো)
// ```


// let number = 7;

// if(number % 2 === 0 ) { 
//     console.log('জোড় ')
// } else{ 
//     console.log('বিজোড়')
// }


// **Problem 5**
// ```
// let hour = 14;

// 0-11   → "সকাল"
// 12-17  → "দুপুর"
// 18-23  → "রাত"

// hour অনুযায়ী সময় বলো।


// let hour = 14;

// if(hour >= 0 && hour < 12) {
//     console.log("morning");
// } else if(hour >= 12 && hour < 18) {
//     console.log("dhupur");
// } else  {
//     console.log('night');
// }

// or 
// let hour = 14;
// if(hour >= 18) {
//     console.log('night');
// } else if(hour >= 12) { 
//     console.log('dhupur');
// } else {
//     console.log('morning');
// }