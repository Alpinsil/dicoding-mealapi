class CardComp extends HTMLElement {
  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="max-w-sm rounded overflow-hidden shadow-lg min-h-full hover:scale-110 transition-all duration-300 cursor-pointer">
    <img class="w-full" src="${this._card.strMealThumb || this._card.strDrinkThumb}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${this._card.strMeal || this._card.strDrink}</div>
    </div>
  </div>


  `;
  }
}

customElements.define('card-comp', CardComp);
