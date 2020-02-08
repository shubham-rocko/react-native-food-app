import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from '../screens/CategoriesScreens';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FavirotesScreen from "../screens/FavirotesMeal";
import FiltersScreen from "../screens/FiltersScreen";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOption =  {
    headerStyle: {
       backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
   },
   headerTitleStyle: {
       fontFamily: 'open-sans-bold'
   },
   headerBackTitleStyle: {
       fontFamily: 'open-sans'
   },
   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultNavOption
});

const FavNavigstors = createStackNavigator({
    FavoriteMeals: FavirotesScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultNavOption
});

const screenTabs = {
    MealsNav: {screen: MealsNavigator, navigationOptions: {
        tabBarLabel: 'Meals',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meal'
    }},
    FavoriteNav: {screen: FavNavigstors, navigationOptions: {
        tabBarLabel: 'Favorite!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorite!</Text> : 'Meal'
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
                activeTintColor: Colors.accentColor,
                labelStyle: {
                    fontFamily: 'open-sans'
                }
            }
        });

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultNavOption
});

const MainNavigator = createDrawerNavigator({
    TabNav: {
        screen: MealsFavTabNavigator, 
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyles: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator);