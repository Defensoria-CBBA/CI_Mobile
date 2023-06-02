import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";


import ButtonLocations from "../components/ButtonLocations";
import MenuButtom from "../components/MenuButton";
import UseAct from "../theme/style/location";
import {getLocation} from "../api/location.api"
import { useEffect } from "react";

import { LinearGradient } from "expo-linear-gradient";


const NewActivity = StyleSheet.create(UseAct);


export default function Location({ navigation }) {

    const styles = NewActivity();
    const imageUrl3 = require('../../assets/edificio.png');
    const OnPress = () => {navigation.navigate('Location')};
    const OnPress2 = () => {navigation.navigate('DetailLocation')};

    
    /*useEffect(() => {
        async function loadLocation() {
            const response = await getLocation()
            console.log(response)
        }
        loadLocation()
    }, [])*/

    const gobak = () => {
        navigation.goBack()
    }

    return (
        <LinearGradient style={{ height: '100%' }}
            colors={['rgb(202,241,192)', 'rgb(138,228,223)']}
            useAgule={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.5 }}
        >
        
            <ScrollView style={styles.scroll}>
                <View>
                    <Text style={styles.title}>
                        Zonas
                    </Text>
                </View>
                <View  >
                    <ButtonLocations norte={OnPress} centro={OnPress} sur={OnPress} />
                </View>
                <View style= {styles.conatinerColumn}>
                    <MenuButtom image={imageUrl3} text="quieres somos" onPress={OnPress2} />
                </View>
            </ScrollView>
        </LinearGradient>       
    );
    }