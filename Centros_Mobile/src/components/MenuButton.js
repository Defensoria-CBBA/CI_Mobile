import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const MenuButtom = ({ image, text, onPress }) => {
    return (
        <TouchableOpacity

            style={styles.button}
            onPress={onPress}>
            <Image source={image} style={{ width: 60, height: 60 }} />
            <Text style={styles.text}>{text}</Text>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        alignSelf: 'stretch'
    },
    text: {
        color: 'black',
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        //negrita
    },
   

});
export default MenuButtom;