import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigators from './navigation/MealsNavigatos';
import MealsReducer from './store/reducers/meals';

const reducer = combineReducers({
  meals: MealsReducer
});

const store = createStore(reducer);

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

  return (<Provider store={store}><MealsNavigators /></Provider>);
}

const styles = StyleSheet.create({
  root: { 
    padding: 50 
  }
  });
