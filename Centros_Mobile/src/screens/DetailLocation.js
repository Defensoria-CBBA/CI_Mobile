import React,{useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from "react-native";
import UseAct from "../theme/style/detailLocation";
import { LinearGradient } from "expo-linear-gradient";
const NewActivity = StyleSheet.create(UseAct);
import * as Location from 'expo-location';

export default function DetailActivity({ navigation }) {
    const styles = NewActivity();
    const imageUrl = require('../../assets/ciberacoso.png');
    const [mapRegion, setMapRegion] = useState({
        latitude: 4.6097100,
        longitude: -74.0817500,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

    });
    return (
        <LinearGradient style={{ height: '100%' }}
            colors={['rgb(202,241,192)', 'rgb(138,228,223)']}
            useAgule={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.5 }}
        >
            <View style={styles.container}>
                <MapView 
                scrollEnabled={false}
                zoomEnabled={false}
                zoomControlEnabled={false}



                style={styles.map}
                region={mapRegion}
                >
                    <Marker 
                    coordinate={{latitude: 4.6097100, longitude: -74.0817500}}
                    title="Ciberacoso"
                    description="Ciberacoso"
                    />
                </MapView>
                <Text style={styles.title}>Ciberacoso</Text>
                <Text style={styles.title}>Fecha: 27/5/2023</Text>
                <Text style={styles.title}>Hora: 10:00 am</Text>
                <Text style={styles.title}>Lugar: Universidad Nacional de Colombia</Text>
                <Text style={styles.title}>Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Text>

            </View>
        </LinearGradient>   
    );
}



