import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from '../data/dummy-data';
import MealList from "../components/MealList";
import CustomHeaderButton from "../components/HeaderButton";

const FavirotesScreen = props => {
    const mealsData = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
    return <MealList listData={mealsData} navigation={props.navigation} />
};

FavirotesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavirotesScreen;