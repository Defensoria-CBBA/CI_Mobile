import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Activity from './src/screens/Activity';
import Main from './src/screens/Main';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Activity" component={Activity} />
       
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
