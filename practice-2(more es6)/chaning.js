//declare variable based on the name of an object property
const myObject ={x:2, y:5, z:100, a:25, b:60};
const {x,b}= myObject;
console.log(b);
console.log(myObject?.p?.q);


//destructing array
const [p,q]= [23,54,67,87];
// console.log(p,q);

const {sky,money,color} = { sky:'blue', soil:'gray', color:'red', money:500 };
// console.log(sky,money);