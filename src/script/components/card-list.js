import './card-comp';

class CardList extends HTMLElement {
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="justify-center flex flex-wrap gap-7 mt-6" id="${this._cards[0].strDrink ? 'drinkList' : 'mealList'}"></div>`;
    this._cards.forEach((card) => {
      const cardItemElement = document.createElement('card-comp');
      cardItemElement.card = card;
      this.firstElementChild.appendChild(cardItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('card-list', CardList);
