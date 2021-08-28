
class Support {
    name;
    role= 'support web developer';
    address='BD';
    constructor (name){
        this.name= name;
    }
    // startSession (){
    //     console.log(this.name,'start a support session');
    // }
}
const faysal= new Support('Faysal');
// faysal.startSession();
console.log(faysal);

// const [a, b] = [1,2,3,4,45,5];
// console.log(a+b);