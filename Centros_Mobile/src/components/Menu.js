import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';


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
          <Drawer.Navigator 
          screenOptions={{
            drawerStyle: {
              backgroundColor: 'rgb(138,228,223)',
              width: 240,
              drawerLabelStyle: {
                fontSize: 15,
                fontWeight: 'bold',
              },
             
             
            },
          }} initialRouteName="Menu"
          
          >
            <Drawer.Screen name="Menu" component={Main}
              options={{
                title: 'Menu',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },

              }}
             />
            <Drawer.Screen name='Location' component={Location}
            options={
              ({ navigation }) => ({
                title: 'Localidades',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{ color: 'black', marginRight: 20 }}>Volver</Text>
                  </TouchableOpacity>
                ),
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },

              })

            }
             />
            <Drawer.Screen name='Activity' component={Activity}
            options={
              ({ navigation }) => ({
                title: 'actividades',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{ color: 'black', marginRight: 20 }}>Volver</Text>
                  </TouchableOpacity>
                ),
              })

            }
            />
            <Drawer.Screen name='Origin' component={Origin}
            options={
              ({ navigation }) => ({
                title: 'Quienes somos',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{ color: 'black', marginRight: 20 }}>Volver</Text>
                  </TouchableOpacity>
                ),
              })

            }

            />
            <Drawer.Screen name='Claims' component={Claims}
            options={
              ({ navigation }) => ({
                title: 'Reclamos',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{ color: 'black', marginRight: 20 }}>Volver</Text>
                  </TouchableOpacity>
                ),
              })

            }

            />
            <Drawer.Screen name='DetailActivity' component={DetailActivity}
            options={
              ({navigation}) => ({
                title: 'Detalle Actividad',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{color: 'black', marginRight: 20}}>Volver</Text>
                  </TouchableOpacity>
                ),
                drawerLabel : () => null,
                unmountOnBlur: true,
                
              })

            }
            />
            <Drawer.Screen name='DetailLocation' component={DetailLocation}
            options={
              ({ navigation }) => ({
                title: 'Detalle Ubicacion',
                headerStyle: {
                  backgroundColor: 'rgb(202,241,192)',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{ color: 'black', marginRight: 20 }}>Volver</Text>
                  </TouchableOpacity>
                ),
                drawerLabel : () => null,
                unmountOnBlur: true,
              })

            }
            />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }