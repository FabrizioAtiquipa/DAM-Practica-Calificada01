import React, {Component} from "react";
import {StyleSheet, View} from 'react-native';
import ConexionFetch from './components/ConexionFetch/ConexionFetch';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './components/Detalles/Details'


const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="ConexionFetch">
            <Stack.Screen name="SUPER HERO DC" component={ConexionFetch} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
    </NavigationContainer>

    );
  }
}
