const searchFood=async () =>{
    const searchField = document.getElementById('search-field');
    const searchText= searchField.value;
    searchField.value='';
    if(searchText==''){
        //show something
        
    }
    else{
        // load data
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        try{
            const res= await fetch(url);
            const data = await res.json();
            displaySearchResult(data.meals);
        }
        catch (error){
            console.log(error);
        }
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displaySearchResult(data.meals));
        // .catch(error => console.log(error));
    }
}

const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result')
    searchResult.textContent='';
    if(meals.length == 0){
        // const nullDiv = document.createElement('div');
        // nullDiv.innerHTML=`
        // <h3>Product not found.</h3>
        // `
        // searchResult.appendChild(nullDiv);
    }
    meals.forEach(meal =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top p-2" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    })
}
const loadMealDetail= async mealId =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res=await fetch(url);
    const data = await res.json();
    displayDetail(data.meals[0]);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayDetail(data.meals[0]));
}
const displayDetail = meal =>{
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    mealDetails.appendChild(div);
}