import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Activity from './src/screens/Activity';
import Main from './src/screens/Main';
import Description from './src/screens/Description';
import Location from './src/screens/Location';
import Cart from './src/screens/Cart';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Cart">
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Activity" component={Activity} />
        <Drawer.Screen name='Description' component={Description} />
        <Drawer.Screen name='Location' component={Location} />
       
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
