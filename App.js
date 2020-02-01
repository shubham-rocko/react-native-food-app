import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from "react-native-screens";

import MealsNavigators from './navigation/MealsNavigatos';

enableScreens();

fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return <AppLoading 
      startAsync={fetchFont}
      onFinish={() => {setFontLoaded(true)}}
    />
  }

  return (<MealsNavigators />);
}

const styles = StyleSheet.create({
  root: { 
    padding: 50 
  }
  });
