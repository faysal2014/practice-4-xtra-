document.body.style.backgroundColor="black";
document.body.style.color="white";

//js object notation
//json
const user = { id:11, name:"faysal", job:'student'};
const stringified=JSON.stringify(user);


const shop ={
    name:'faysal store',
    address:'dhaka',
    products:['laptop','mobile','pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
