// import main from './view/main';
import './components/search-field';
import mealView from './view/mealView';
import './components/switch-button';

const app = () => {
  const root = document.querySelector('#root');
  const SearchField = document.createElement('search-field');
  const SwitchButton = document.createElement('switch-button');

  root.appendChild(SearchField);
  root.appendChild(SwitchButton);

  if (SearchField.value) {
    mealView(SearchField.value);
  } else {
    mealView();
  }

  const onSearchFill = () => {
    if (SearchField.value) {
      mealView(SearchField.value);
    } else {
      mealView();
    }
  };

  SearchField.clickEvent = onSearchFill;
};

export default app;
