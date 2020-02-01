import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                This is MealDetails Screen
            </Text>
            <Button title="Back to Home" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailsScreen;