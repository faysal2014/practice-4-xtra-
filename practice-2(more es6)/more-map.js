const friends= ['faysal','fahad'];
// const friendsLength=friends.map(friend=>friend.length);
// console.log(friendsLength);


const products =[
    { name:'water bottle', price: 50},
    { name:'Mobile', price: 20000},
    { name:'Book', price: 500},
    { name:'Mug', price: 100},
    { name:'Bottle', price: 1200},
]
// const productNames= products.map(product => product.name);
// const productPrice= products.map(product => product.price);
// console.log(productNames,productPrice);

const expensive = products.filter(product => product.price>600);
console.log(expensive);