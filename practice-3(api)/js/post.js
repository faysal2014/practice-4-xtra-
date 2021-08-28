document.body.style.backgroundColor='black';
document.body.style.color='white';
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}
loadPost();
function displayPost(data){
    // console.log(data);
    const postContainer = document.getElementById('posts');
    for(const post of data){
        const div = document.createElement('div');
        div.innerHTML=`
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        // console.log(post.title);
    }
}