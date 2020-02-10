import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.mealData.filteredMeals)

    const mealsData = availableMeals.filter(meal => meal.categoryId.indexOf(catId) >= 0);

    if(!mealsData.length){
        return <View style={styles.content}>
            <Text>No meals found check your filters.</Text>
        </View>
    }

    return <MealList listData={mealsData} navigation={props.navigation} />
};

CategoryMealScreen.navigationOptions = (navData) => {
    const catId = navData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealScreen;