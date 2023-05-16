import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from "react-native";

//screens
import Activity from './src/screens/Activity';
import Main from './src/screens/Main';
import Location from './src/screens/Location';
import FullActivity from './src/screens/FullActivity';
const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
   
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Menu">
          <Drawer.Screen name="Menu" component={Main} />
          <Drawer.Screen name="Activity" component={Activity} />
          <Drawer.Screen name="FullActivity" component={FullActivity} />
          <Drawer.Screen name='Location' component={Location} />
        </Drawer.Navigator>
      </NavigationContainer>

  );
}




