const numbers=[23,54,67,89,42];

// console.log(numbers);
// console.log(...numbers);

const max=Math.max(34,65,78);
const maxValues=Math.max(numbers);
const maxArray=Math.max(...numbers);
// console.log(max,maxValues,maxArray);


const numbers2=[...numbers];
numbers.push(55);
console.log(numbers);
console.log(numbers2);