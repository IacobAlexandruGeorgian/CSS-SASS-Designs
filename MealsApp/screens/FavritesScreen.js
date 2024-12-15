import {View, Text, StyleSheet } from 'react-native';

import MealsList from '../components/MealList/MealsList';
import { MEALS } from '../data/dummy-data';

// import { useContext } from 'react';
import { useSelector } from 'react-redux';

function FavoritesScreen() {
//   const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
       <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorites meals yet.</Text>
       </View> 
    )
  }

  return <MealsList item={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});
