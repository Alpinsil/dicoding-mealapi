const buttonList = ['meal', 'drink'];

class SwitchButton extends HTMLElement {
  connectedCallback() {
    this.active = 'meal';
    this.render();
  }

  get value() {
    return this.active;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = '<div class="flex gap-2 justify-center"></div>';
    const listButton = buttonList.map((btn) => `<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-3xl ${this.active === btn ? 'active-btn' : 'inactive-btn'}">${btn}</button>`);
    this.firstElementChild.innerHTML = listButton;
    this.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', () => {
      this.active = btn.innerHTML;
      // if (this.active === 'meal') {
      //   document.getElementById('drinkList').classList.add('hidden');
      //   document.getElementById('mealList').classList.remove('hidden');
      // } else {
      //   document.getElementById('drinkList').classList.remove('hidden');
      //   document.getElementById('mealList').classList.add('hidden');
      // }
      this.render();
    }));
  }
}

customElements.define('switch-button', SwitchButton);
