// import main from './view/main';
import './components/search-field';
import data from './data/mealAPI';

const app = () => {
  const arr = data.getListData();
  const root = document.querySelector('#root');
  const SearchField = document.createElement('search-field');

  console.log(arr[0]);
  root.appendChild(SearchField);
};

export default app;
