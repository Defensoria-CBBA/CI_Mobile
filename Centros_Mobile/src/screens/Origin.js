import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import UseAct from "../theme/style/origin";
import { LinearGradient } from "expo-linear-gradient";

const NewActivity = StyleSheet.create(UseAct);


export default function Origin({ navigation }) {
    const styles = NewActivity();
    const imageUrl = require('../../assets/somos.png');

    const OnPress = () => { navigation.navigate('FullActivity') };



    return (
        <LinearGradient style={{ height: '100%' }}
            colors={['rgb(202,241,192)', 'rgb(138,228,223)']}
            useAgule={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.5 }}
        >
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        ¿Quienes somos?
                    </Text>
                </View>
                    <Image source={imageUrl} style={styles.image} />
                <View style={styles.conatinerText}>
                    <Text style={styles.text}>
                        La Defensoría de la Niñez y Adolescencia es una instancia dependiente del
                         Gobierno Autónomo Municipal de Cochabamba que brinda servicios públicos, 
                         permanentes y gratuitos de defensa psico-social-legal, para garantizar a las niñas, 
                         niños y adolescentes la vigencia plena de sus derechos.
                     </Text>
                </View>
            </ScrollView>

        </LinearGradient>
    );
}