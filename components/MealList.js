import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux"

import MealItems from ".//MealItems";

const MealList = props => {

    const favoriteMeals = useSelector(state => state.mealData.favoriteMeals);

    const renderMealItem = (itemData) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return (<MealItems title={itemData.item.title} 
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({routeName: 'MealDetails', params: {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    isFav: isFavorite
                }});
        }}/>);
    }

    return (
        <View style={styles.list}>
            <FlatList 
            data={props.listData} 
            renderItem={renderMealItem}
            style={{width: '100%'}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;