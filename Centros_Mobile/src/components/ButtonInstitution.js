import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MenuButton from "./MenuButton";

const ButtonLocations = () => {
    const imageUrl = require('../../assets/ciberacoso.png');
    const imageUrl2 = require('../../assets/rutina.png');
    const imageUrl3 = require('../../assets/edificio.png');

    return(
        <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={styles.containerButton}>
                <MenuButton image={imageUrl3} text="quieres somos" onPress={() => console.log('hola')} />
            </View>
            <View style={styles.containerButton}>
                <MenuButton image={imageUrl} text="Desnuncias o Reclamos" onPress={() => console.log('hola')} />
            </View>
            <View style={styles.containerButton}>
                <MenuButton image={imageUrl2} text="Todas  la actividades" onPress={() => console.log('hola')} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerButton: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 5,
        width: 'auto',
        height: 'auto',
        top: '-1%',
    },

});
export default ButtonLocations;
