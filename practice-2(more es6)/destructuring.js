const fish={id: 58, name:'hilsha', price: 9000, phone:'0170000000',adress:'Dhaka',dress:'silver' };
// const phone=fish.phone;
// const price=fish.price;
// const dress=fish.dress;
// const id=fish.id;

// const {phone,price,dress,id}=fish;
// console.log(phone,dress);


const company={
    name:'gp',
    ceo:{
        id:1,
        name:'faysal',
        food:'rice'
    },
    web:{
        work:'website development',
        employment:22,
        framework:'react',
        tech:{
            first:'html',
            second:'css',
            third:'js'
        }
    }
}

const {work,framework}=company.web;
const {food}=company.ceo;
const {second}=company.web.tech;
const {name}= company;

console.log(work,second,food,name);