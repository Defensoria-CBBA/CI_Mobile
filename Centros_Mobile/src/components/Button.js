import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Button = ({icon, text, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}

        onPress={onPress}>
            <Ionicons name={icon} size={40} color="black" />
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
    },
    text: {
        color: 'black',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        //negrita



    },

});
export default Button;