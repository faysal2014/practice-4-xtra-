function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(post => post.json())
    .then(postData => console.log(postData));
}
function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        // console.log(user.name);
        const li= document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `name: ${user.name} & email: ${user.email}`;
        ul.appendChild(li);
    }
}