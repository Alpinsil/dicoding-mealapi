import axios from 'axios';
import '../components/card-list';

const baseUrl = 'https://themealdb.com/api/json/v1/1/';
const cardList = document.createElement('card-list');
const root = document.querySelector('#root');
// Make a request for a user with a given ID
function mealByCategory(filterBy = 'c', type = 'Seafood') {
  axios
    .get(`${baseUrl}filter.php?${filterBy}=${type}`)
    .then((response) => {
      // handle success
      // console.log(response.data.meals.slice(0, 12));
      cardList.cards = response.data.meals.slice(0, 12);
      root.appendChild(cardList);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

function mealSearch(keyword) {
  axios
    .get(`${baseUrl}search.php?s=${keyword}`)
    .then((response) => {
      cardList.cards = response.data.meals.slice(0, 12);
      root.appendChild(cardList);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { mealByCategory, mealSearch };
