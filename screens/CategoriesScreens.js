import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTiles from '../components/CategoryGridTiles';

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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Category',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})

export default CategoriesScreen;