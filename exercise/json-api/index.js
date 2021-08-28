document.body.style.backgroundColor='black';
document.body.style.color='white';

// function myInfo(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resource => resource.json())
//     .then(data => dataControl(data));
// }
// function dataControl(data){
//     // console.log(data);
//     const ul = document.getElementById('userData');
//     for(const user of data){
//         const li= document.createElement('li');
//         li.innerText=`name: ${user.name} & Email: ${user.email}`;
//         ul.appendChild(li);
//     }
// }

function myInfo(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => callData(data));
}
function callData(data){
    const list= document.getElementById('userData');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText=`Name: ${user.name} & Email: ${user.email}`;
        list.appendChild(li);
    }
}