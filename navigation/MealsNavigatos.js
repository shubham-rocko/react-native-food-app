import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from '../screens/CategoriesScreens';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FavirotesScreen from "../screens/FavirotesMeal";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
         headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
    }
});

const screenTabs = {
    MealsNav: {screen: MealsNavigator, navigationOptions: {
        tabBarLabel: 'Meals',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.primaryColor
    }},
    FavoriteNav: {screen: FavirotesScreen, navigationOptions: {
        tabBarLabel: 'Favorite!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.accentColor
    }}
}

const MealsFavTabNavigator = Platform.OS === "android" 
        ? createMaterialBottomTabNavigator(
            screenTabs, {
            activeColor: 'white',
            shifting: true
        })
        : createBottomTabNavigator(
            screenTabs, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });

export default createAppContainer(MealsFavTabNavigator);