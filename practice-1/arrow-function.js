function add(num1,num2){
    return num1+num2;
}

const add2=function (num1,num2){
    return num1+num2;
}

//function expression(anonymous)
const add3=function(num1,num2){
    return num1+num2;
}

//arrow function
const add4=(num1,num2) => num1+num2;

const sum1=add(5,15);
const sum2=add2(10,20);
const sum3=add3(20,30);
const sum4=add4(50,50);
console.log(sum1,sum2,sum3,sum4);