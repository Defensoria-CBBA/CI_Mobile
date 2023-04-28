import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from "react-native";

import SplashScreen from './src/components/SplashScreen';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <SplashScreen>

    </SplashScreen>
    

  );
}




