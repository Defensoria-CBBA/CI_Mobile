import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Activity from '../screens/Activity';
import Main from '../screens/Main';
import Location from '../screens/Location';

const Drawer = createDrawerNavigator();


export default function MenuApp() {

    return (
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 240,
            },
          }} initialRouteName="Menu" >
            <Drawer.Screen name="Menu" component={Main} />
            <Drawer.Screen name="Activity" component={Activity} />
            <Drawer.Screen name='Location' component={Location} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }