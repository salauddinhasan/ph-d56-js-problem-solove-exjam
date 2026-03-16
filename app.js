const numbers = [10, 20, 30, 40, 50];

const add = numbers.map(number => number + 5);
console.log(add);


const numbers2 = [3, 7, 12, 18, 5, 22, 9];

const events = numbers2.filter(num => num > 10);
console.log(events)


const students = [
  { name: "Rahim", marks: 45 },
  { name: "Karim", marks: 72 },
  { name: "Jamal", marks: 58 },
  { name: "Salam", marks: 80 },
];

 
const result = students.filter(student => student.marks > 60)
.map(student => student.name);
console.log(result);
 