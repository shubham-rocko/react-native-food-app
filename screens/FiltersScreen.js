import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import Colors from "../constants/Colors";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
            trackColor={{true: Colors.primaryColor}}
            thumbColor={Platform.OS == "android" ? Colors.primaryColor : ''}
            value={props.state} 
            onValueChange={props.onChange} />
        </View>
    )
}

const FilterScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                label="Gluten-Free" 
                state={isGlutenFree} 
                onChange={(newVal) => setIsGlutenFree(newVal)} />
            <FilterSwitch 
                label="Lactose-Free" 
                state={isLactoseFree} 
                onChange={(newVal) => setIsLactoseFree(newVal)} />
            <FilterSwitch 
                label="Vegan" 
                state={isVegan} 
                onChange={(newVal) => setIsVegan(newVal)} />
            <FilterSwitch 
                label="Vegetarian" 
                state={isVegetarian} 
                onChange={(newVal) => setIsVegetarian(newVal)} />
        </View>
    )
};

FilterScreen.navigatorOptions = {
    headerTitle: 'Filter Meals'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
})

export default FilterScreen;