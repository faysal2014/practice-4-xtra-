//important
const add = (num1,num2) => num1 + num2;
const sum = add(20,80);
console.log(sum);

const multiply=(num1,num2,num3) => num1 * num2 * num3;
const result=multiply(3,5,10);
console.log(result);

const tenTimes = (num) => num*10;
const output= tenTimes(25);
console.log(output);

//important
const fiveTimes= num => num*5;
const value=fiveTimes(40);
console.log(value);

//important
const getName= () =>'faysal';
const name = getName();
console.log(name);

//important
const doMath = (x,y) =>{
    const sum =x+y;
    const diff= x-y;
    const resultNumber=sum*diff;
    const outputNumber=result*5;
    return outputNumber;
}
const myResult=doMath(5,6);
console.log(myResult);