// import main from './view/main';
import './components/search-field';
import './components/switch-button';
import drinkView from './view/drinkView';
import mealView from './view/mealView';

const app = () => {
  const root = document.querySelector('#root');
  const SearchField = document.createElement('search-field');
  const SwitchButton = document.createElement('switch-button');

  root.appendChild(SearchField);
  root.append(SwitchButton);
  if (!SearchField.value) {
    if (SwitchButton.value === 'meal') {
      mealView();
    } else {
      drinkView();
    }
  }

  const onSearchFill = () => {
    if (SearchField.value) {
      // mealView(SearchField.value);
      drinkView(SearchField.value);
    } else {
      mealView();
      drinkView();
    }
  };

  SearchField.clickEvent = onSearchFill;
};

export default app;
