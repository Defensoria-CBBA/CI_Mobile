import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


import Fund from "../components/Fond";
import ButtonLocations from "../components/ButtonLocations";
import MenuButtom from "../components/MenuButton";
import UseAct from "../theme/style/location";
import {getLocation} from "../api/location.api"
import { useEffect } from "react";

const NewActivity = StyleSheet.create(UseAct);


export default function Location() {

    const styles = NewActivity();
    const imageUrl3 = require('../../assets/edificio.png');
    
    /*useEffect(() => {
        async function loadLocation() {
            const response = await getLocation()
            console.log(response)
        }
        loadLocation()
    }, [])*/

    return (
        <View style={styles.fond}>
            <Fund>
                <ScrollView>
                    
                </ScrollView>
            </Fund>
            
            


        </View>
    );
    }