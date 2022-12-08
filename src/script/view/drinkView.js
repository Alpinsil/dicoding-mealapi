import { drinkByCategory, drinkSearch } from '../data/drinkAPI';

const drinkView = (search) => {
  if (search) {
    drinkSearch(search);
  }
  drinkByCategory();
};

export default drinkView;
