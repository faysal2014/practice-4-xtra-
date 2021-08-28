// document.getElementById('add-players').addEventListener('click',function(){
//     const totalPlayers=document.getElementById('players');
//     const addDiv=document.createElement('div');
//     addDiv.classList.add('player');
//     addDiv.innerHTML=`
//     <h3>New Player</h3>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, ipsam?</p>
//     `
//     totalPlayers.appendChild(addDiv);
// })


document.getElementById('add-players').addEventListener('click',function(){
    const totalPlayers=document.getElementById('players');
    const addDiv=document.createElement('div');
    addDiv.classList.add('player');
    addDiv.innerHTML=`
    <h3>New player</h3>
    <p>Doloribus repellat dolores veniam sit saepe ipsa velit magni alias!</p>
    `
    totalPlayers.appendChild(addDiv);
})