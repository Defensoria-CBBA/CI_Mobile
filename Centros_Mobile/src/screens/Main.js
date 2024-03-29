import React from "react";
import { View, Text, StyleSheet, SafeAreaView,ScrollView} from "react-native";
import UseMain from "../theme/style/main";
import { LinearGradient } from "expo-linear-gradient";

import ButtonLocations from "../components/ButtonLocations";
import ButtonInstitution from "../components/ButtonInstitution";
import Searchg from "../components/Searchg";
import CarouselCards from "../components/CarouselCards";

const NewMain = StyleSheet.create(UseMain);

export default function Main({ navigation }) {

    const onPress = () => {navigation.navigate('Location')};
    const onPress2 = () => {navigation.navigate('Activity')};
    const onPress3 = () => {navigation.navigate('Claims')};
    const onPress4 = () => {navigation.navigate('Origin')};
   
   const styles = NewMain();
   
    return (
        <LinearGradient style={{ height: '100%' }}
                colors={['rgb(202,241,198)', 'rgb(138,228,223)']}
                useAgule={true}
                angle={45}
                angleCenter={{ x: 0.5, y: 0.5 }}
        >
            <ScrollView style={styles.scroll}
            
            >
                <View>
                
                    <Text style={styles.title}>Buscar</Text>
                    <Searchg />
                    <Text style={styles.title}>Actividades de la semana</Text>
                </View>
                <SafeAreaView style={styles.container}>
                    <CarouselCards />
                </SafeAreaView>
                <View>
                    <View style={styles.containercont}>
                        <Text style={styles.title}>Localidad Zonas </Text>
                    </View>
                        <ButtonLocations norte={onPress} centro={onPress} sur={onPress} /> 
                </View>
                <View>
                    <View style={styles.containercont}>
                        <Text style={styles.title}>Institucion </Text>
                    </View>
                    <View>
                        <ButtonInstitution oringin={onPress4} reclamos={onPress3} activity={onPress2}/>
                    </View> 
                </View>
            </ScrollView>
        </LinearGradient>
       
    );
}
