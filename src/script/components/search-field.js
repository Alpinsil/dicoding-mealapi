class SearchField extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    console.log(event);
    this.render();
  }

  get value() {
    return this.querySelector('#cari').value;
  }

  render() {
    this.innerHTML = `
    <input type="text" placeholder="search" id="cari"
    class="my-0 mx-[30%] bg-[10px_20px] bg-no-repeat w-[40%] text-base p-[12px_20px_12px_40px] border-[#ddd] border-2 border-solid mb-3 bg-[#32417b2f] rounded-3xl  transition-all duration-300 mt-7 outline-gray-400 text-slate-700">`;

    this.querySelector('#cari').addEventListener('keyup', this._clickEvent);
  }
}

customElements.define('search-field', SearchField);
