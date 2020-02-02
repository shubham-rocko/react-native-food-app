import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId')

    const mealDetails = MEALS.find((meal) => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>
                This is MealDetails Screen {mealDetails.title}
            </Text>
            <Button title="Back to Home" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    )
};

MealDetailsScreen.navigationOptions = (navData) => {
    const mealId = navData.navigation.getParam('mealId')

    const mealDetails = MEALS.find((meal) => meal.id === mealId);

    return {
        headerTitle: mealDetails.title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" 
            iconName='ios-star' 
            onPress={() => console.log('Mark as Favorite!')}/>
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailsScreen;