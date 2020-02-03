import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const mealsData = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);

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
})

export default CategoryMealScreen;