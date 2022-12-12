import './components/search-field';
import mealView from './view/mealView';
import './components/switch-button';
import './components/card-list';

const app = () => {
  const root = document.querySelector('#root');
  const SearchField = document.createElement('search-field');
  const SwitchButton = document.createElement('switch-button');
  const CardList = document.createElement('card-list');

  root.appendChild(SearchField);
  root.appendChild(SwitchButton);

  if (SearchField.value) {
    mealView(SearchField.value);
  }
  if (CardList.cards !== 'not found') {
    mealView('', localStorage.getItem('ActiveBtn'));
    console.log('ada');
  }

  const onSearchFill = () => {
    if (SearchField.value) {
      mealView(SearchField.value);
    }
  };

  SearchField.clickEvent = onSearchFill;
};

export default app;
