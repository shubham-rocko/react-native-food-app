import React from 'react';
import { Text, StyleSheet } from "react-native";

const DefaultView = props => <Text style={styles.textStyle}>{props.children}</Text>

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans'
    }
})

export default DefaultView;