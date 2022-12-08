import axios from 'axios';
import '../components/card-list';

const baseUrl = 'https://thecocktaildb.com/api/json/v1/1/';
const cardList = document.createElement('card-list');
const root = document.querySelector('#root');
const errMsg = document.createElement('h1');

function drinkByCategory(filterBy = 'c', type = 'Cocktail') {
  axios
    .get(`${baseUrl}filter.php?${filterBy}=${type}`)
    .then((response) => {
      // handle success
      // console.log(response.data.drinks.slice(0, 10));
      cardList.cards = response.data.drinks.slice(0, 12);
      root.appendChild(cardList);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

function drinkSearch(keyword) {
  axios
    .get(`${baseUrl}search.php?s=${keyword}`)
    .then((response) => {
      if (response.data.drinks) {
        cardList.cards = response.data.drinks.slice(0, 12);
        console.log(response.data.drinks);
        root.appendChild(cardList);
      } else {
        const removeDrink = document.getElementById('drinkList');
        removeDrink.remove();
        errMsg.innerHTML = `Drink ${keyword} not found`;
        root.append(errMsg);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export { drinkSearch, drinkByCategory };
