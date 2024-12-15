import { useEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const CategoryTitle = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen;


