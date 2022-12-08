import { mealByCategory, mealSearch } from '../data/mealAPI';

const MealView = (search) => {
  if (search) {
    mealSearch(search);
  }
  mealByCategory('a', 'Canadian');
};

export default MealView;
