
class Support {
    name;
    role= 'support web developer';
    address='BD';
    constructor (name){
        this.name= name;
    }
    startSession (){
        console.log(this.name,'start a support session');
    }
}
const faysal= new Support('Faysal');
faysal.startSession();
// console.log(faysal);


class StudentCare{
    name;
    designation = 'student care web dev';
    address = 'bd';
    constructor (name,address){
        this.name=name;
        this.address=address;
    }
    buildARoutione(student){
        console.log(this.name,'build a routine for', student);
    }
}
const fahad = new StudentCare('Fahad','Dhaka');
console.log(fahad);