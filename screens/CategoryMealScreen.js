import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItems from "../components/MealItems";

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const mealsData = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);

    const renderMealItem = (itemData) => {
        return (<MealItems title={itemData.item.title} 
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({routeName: 'MealDetails', params: {
                    mealId: itemData.item.id
                }});
        }}/>);
    }

    return (
        <View style={styles.screen}>
            <FlatList 
            data={mealsData} 
            renderItem={renderMealItem}
            style={{width: '100%'}}/>
        </View>
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