import { mealByCategory, mealSearch } from '../data/mealAPI';

const MealView = (search, category) => {
  if (search) {
    mealSearch(search);
  }
  mealByCategory('c', category);
};

export default MealView;
