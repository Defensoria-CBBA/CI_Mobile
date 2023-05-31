import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";


import UseAct from "../theme/style/detailActivity";

import { LinearGradient } from "expo-linear-gradient";

const NewActivity = StyleSheet.create(UseAct);


export default function DetailActivity({ navigation }) {
    const styles = NewActivity();
    const imageUrl = require('../../assets/ciberacoso.png');


    return (
        <LinearGradient style={{ height: '100%' }}
            colors={['rgb(202,241,192)', 'rgb(138,228,223)']}
            useAgule={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.5 }}
        >
            <ScrollView style={styles.scroll}>
                <TouchableOpacity style={styles.button} 
                >
                    <Image style={styles.image} source={imageUrl} />
                    <Text style={styles.title}>dia de la madre</Text>
                    <Text>Fecha: 27/5/2023</Text>
                </TouchableOpacity>
                <View style={styles.container2}>
                    <Text>
                        El amor de una madre por su hijo es como ninguna otra cosa en el mundo.
                        No conoce la ley, no tiene lástima, desafía todas las cosas y aplasta sin
                        piedad todo lo que se interpone en su camino”. Agatha Christie.
                    </Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}