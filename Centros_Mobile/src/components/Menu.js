import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Main from '../screens/Main';
import Location from '../screens/Location';
import Activity from '../screens/Activity';
import Origin from '../screens/Origin';
import Claims from '../screens/Claims';
import DetailActivity from '../screens/DetailActivity';
import DetailLocation from '../screens/DetailLocation';



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
            <Drawer.Screen name='Location' component={Location} />
            <Drawer.Screen name='Activity' component={Activity}/>
            <Drawer.Screen name='Origin' component={Origin}/>
            <Drawer.Screen name='Claims' component={Claims}/>
            <Drawer.Screen name='DetailActivity' component={DetailActivity}/>
            <Drawer.Screen name='DetailLocation' component={DetailLocation}/>
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }