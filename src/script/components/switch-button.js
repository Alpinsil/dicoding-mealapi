const buttonList = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];

class SwitchButton extends HTMLElement {
  connectedCallback() {
    this.active = localStorage.getItem('ActiveBtn') || 'Beef';
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
    this.innerHTML = '<div class="flex gap-4 justify-center flex-wrap mb-10 w-[300px] mx-auto lg:w-full"></div>';
    const listButton = buttonList.map((btn) => `<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-3xl ${this.active === btn ? 'active-btn' : 'inactive-btn'}">${btn}</button>`);
    this.firstElementChild.innerHTML = listButton.join('');
    this.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', () => {
      localStorage.setItem('ActiveBtn', btn.innerHTML);
      this.active = localStorage.getItem('ActiveBtn');
      this.render();
      window.location.reload(true);
    }));
  }
}

customElements.define('switch-button', SwitchButton);
