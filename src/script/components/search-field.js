class SearchField extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#cari').value;
  }

  render() {
    this.innerHTML = `<div class="flex justify-center gap-4">
    <input type="text" placeholder="search" id="cari" autofocus
    class="my-0 bg-[10px_20px] bg-no-repeat w-[40%] text-base p-[12px_20px_12px_40px] border-[#ddd] border-2 border-solid mb-3 bg-[#32417b2f] rounded-3xl  transition-all duration-300 mt-7 outline-gray-400 text-slate-700"> 
    <button id="btnCari" class="bg-sky-900 hover:bg-sky-500 text-white font-bold px-4 h-[50px] mt-[26px] rounded-3xl">Search</button>
    </div>`;

    this.querySelector('#btnCari').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-field', SearchField);
