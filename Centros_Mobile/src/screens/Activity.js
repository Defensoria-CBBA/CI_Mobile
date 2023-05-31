import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

import UseAct from "../theme/style/activity";
import ButtonLocations from "../components/ButtonLocations";
import MenuButtom from "../components/MenuButton";

import { LinearGradient } from "expo-linear-gradient";

const NewActivity = StyleSheet.create(UseAct);


export default function FullActivity({ navigation}) {
    const styles = NewActivity();
    const imageUrl = require('../../assets/ciberacoso.png');
    const imageUrl2 = require('../../assets/rutina.png');
    const imageUrl3 = require('../../assets/edificio.png');

    const OnPress = () => {navigation.navigate('FullActivity')};
    const OnPress2 = () => {navigation.navigate('DetailActivity')};


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
                <View >
                    <ButtonLocations norte={OnPress} centro={OnPress} sur={OnPress} />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.button} onPress={OnPress2}
                    >
                        <Image style={styles.image} source={imageUrl} />
                        <Text style={styles.title}>dia de la madre</Text>
                        <Text>Fecha: 27/5/2023</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={OnPress2}
                    >
                        <Image style={styles.image} source={imageUrl} />
                        <Text style={styles.title}>dia de la madre</Text>
                        <Text>Fecha: 27/5/2023</Text>
                    </TouchableOpacity>

                </View>
               
            </ScrollView>
        </LinearGradient> 
    );
}