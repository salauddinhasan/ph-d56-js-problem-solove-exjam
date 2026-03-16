// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => { 
//     return acc + curr;
// }, 0);
// console.log(sum);

const prices = [200, 450, 150, 800, 300];

 const sum = prices.reduce((acc, curr) => { 
    return acc + curr
 })
console.log(sum)


// **Problem 2 — মাঝারি**

const students = [
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Jamal", marks: 58 },
  { name: "Salam", marks: 80 },
];

 const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
 console.log(totalMarks)