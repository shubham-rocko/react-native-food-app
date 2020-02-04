import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTiles from '../components/CategoryGridTiles';
import CustomHeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (<CategoryGridTiles 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onSelect={() => {
                props.navigation.navigate({routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                }})
        }} />);
    }

    //directly pass 'CategoryMeals' instead of object in navigate method
    return (
        <FlatList numColumns={2} 
        data={CATEGORIES} 
        renderItem={renderGridItem} />
    )
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meals Category',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})

export default CategoriesScreen;