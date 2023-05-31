import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;



const ActivityButtons = ({ image, title, date, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Image source={image} style={{ width: 300, height: 300}} />
            <Text style={styles.text}>{title}</Text>
            <Text>Fecha: {date}</Text>

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
        width: 'auto',	
        height: 'auto',
    },
    text: {
        color: 'black',
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        //negrita
    },


});
export default ActivityButtons;