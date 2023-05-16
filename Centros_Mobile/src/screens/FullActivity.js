import React from "react";
import { View, Text, StyleSheet} from "react-native";

import Fund from "../components/Fond";
import UseAct from "../theme/style/fullActivity";
import ButtonLocations from "../components/ButtonLocations";
import MenuButtom from "../components/MenuButton";

const NewActivity = StyleSheet.create(UseAct);


export default function FullActivity() {
    const styles = NewActivity();
    const imageUrl = require('../../assets/ciberacoso.png');
    const imageUrl2 = require('../../assets/rutina.png');
    const imageUrl3 = require('../../assets/edificio.png');

    return (
        <View >
            <View style={styles.fond}>
                <Fund />
            </View>
            <View style={styles.container2}>
                <ButtonLocations 
                    text="quieres somos"
                    onPress={() => console.log('hola')}

                        
                />
                <View style={styles.conatinerColumn}>
                   

                        <MenuButtom image={imageUrl3} text="quieres somos" onPress={() => console.log('hola')} />
                        <MenuButtom image={imageUrl2} text="quieres somos" onPress={() => console.log('hola')} />
                        <MenuButtom image={imageUrl} text="quieres somos" onPress={() => console.log('hola')} />
                        <MenuButtom image={imageUrl3} text="quieres somos" onPress={() => console.log('hola')} />
                        <MenuButtom image={imageUrl2} text="quieres somos" onPress={() => console.log('hola')} />

                 
                </View>

               
            </View>
           

        </View>
    );
}