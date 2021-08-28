const searchButton=() =>{
    const searchInput= document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value='';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoodResult(data.meals));
}
const displayFoodResult= meals =>{
    const displayFood=document.getElementById('dispaly-foods');
    displayFood.textContent='';
    meals.forEach(meal =>{
        const div= document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top w-100" alt="...">
                <div class="card-body text-dark text-center">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                </div>
                <button id="button-addon2" class="btn text-white bg-danger" type="button">Add</button>
            </div>
        `
        displayFood.appendChild(div);
    })
}
const loadMealDetail= mealId =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data.meals[0]));
}
const displayDetail = meal =>{
    const mealDetails= document.getElementById('meal-details')
    mealDetails.textContent='';
    const div=document.createElement('div')
    div.classList.add('card');
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body text-center text-dark">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
    </div>
    `
    mealDetails.appendChild(div);
}