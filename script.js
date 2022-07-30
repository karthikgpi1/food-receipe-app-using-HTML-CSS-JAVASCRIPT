const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');

let searchQuery = '';

const APP_ID = '22d162cf';
const APP_KEY ='439537bca6a6fd5875e1ab86d8bdc3a1';
const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();

});

async function fetchAPI (){
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results){
    var generatedHTML = '';
    results.map(result => {
        generatedHTML +=

        `
        <div class="item">
        <div class="images">
        <img src="${result.recipe.image}" alt="" />
        </div>
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-button" href="${result.recipe.url}" target="_blank">view receipe</a>
        </div>
        <h3 class="item-data">calories:${result.recipe.calories.toFixed(2)}</h3>
        <p class="item-data">Diet label:${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels.length : 'no data found'}</p>
        <p class="item-data">Health Label:${result.recipe.healthLabels}</p>
      </div>
      `
    })
    searchResultDiv.innerHTML = generatedHTML;
}


