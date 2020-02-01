import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const mealsData = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);

    const renderMealItem = (itemData) => {
        return (<View><Text>{itemData.item.title}</Text></View>);
    }

    return (
        <FlatList data={mealsData} renderItem={renderMealItem}/>
    )
};

CategoryMealScreen.navigationOptions = (navData) => {
    const catId = navData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;