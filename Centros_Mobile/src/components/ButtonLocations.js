import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";


const ButtonLocations = () => {
   return (
    
       <View style={{ flex: 1, flexDirection: 'row', }}>
           <View style={styles.containerButton}>
               <Button icon="map" text="norte" onPress={() => console.log('hola')} />
           </View>
           <View style={styles.containerButton}>
               <Button icon="map" text="centro" onPress={() => console.log('hola')} />
           </View>
           <View style={styles.containerButton}>
               <Button icon="map" text="sur" onPress={() => console.log('hola')} />
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