import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MenuButton from "./MenuButton";

const ButtonLocations = ({oringin, reclamos, activity}) => {
    const imageUrl = require('../../assets/ciberacoso.png');
    const imageUrl2 = require('../../assets/rutina.png');
    const imageUrl3 = require('../../assets/edificio.png');

    return(
        <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={styles.containerButton}>
                <MenuButton image={imageUrl3} text="quieres somos" onPress={oringin} />
            </View>
            <View style={styles.containerButton}>
                <MenuButton image={imageUrl} text="Desnuncias o Reclamos" onPress={reclamos} />
            </View>
            <View style={styles.containerButton}>
                <MenuButton image={imageUrl2} text="Todas  la actividades" onPress={activity} />
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
