import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => (
    <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
)

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const availableMeals = useSelector(state => state.mealData.meals);

    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({favoriteMealFn: toggleFavHandler})
    }, [toggleFavHandler])

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.imgae}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <ListItem key={ingredient} style={styles.label}>{ingredient}</ListItem>
            ))} 
            <Text style={styles.title}>Steps:</Text>
            {selectedMeal.steps.map((step) => (
                <ListItem key={step} style={styles.label}>{step}</ListItem>
            ))} 
        </ScrollView>
    )
};

MealDetailsScreen.navigationOptions = (navData) => {
    // const mealId = navData.navigation.getParam('mealId')
    const mealTitle = navData.navigation.getParam('mealTitle');
    const toggleFav = navData.navigation.getParam('favoriteMealFn');

    return {
        headerTitle: mealTitle,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" 
            iconName='ios-star' 
            onPress={toggleFav}/>
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    imgae: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 22
    },
    listItem: {
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1
    }
})

export default MealDetailsScreen;