import axios from 'axios';
import '../components/card-list';

const baseUrl = 'https://themealdb.com/api/json/v1/1/';
const cardList = document.createElement('card-list');
const root = document.querySelector('#root');
function mealByCategory(filterBy = 'c', type = 'Seafood') {
  axios
    .get(`${baseUrl}filter.php?${filterBy}=${type}`)
    .then((response) => {
      cardList.cards = response.data.meals;
      root.appendChild(cardList);
    })
    .catch((error) => {
      console.log(error);
    });
}

function mealSearch(keyword) {
  axios
    .get(`${baseUrl}search.php?s=${keyword}`)
    .then((response) => {
      const data = response.data.meals;
      cardList.cards = data || '';
      root.appendChild(cardList);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { mealByCategory, mealSearch };
