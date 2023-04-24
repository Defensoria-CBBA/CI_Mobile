import React from "react";
import { View, Text, StyleSheet, SafeAreaView,ScrollView} from "react-native";
import UseMain from "../theme/style/main";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar} from 'react-native-paper';



import Button from "../components/Button";
import MenuButtom from "../components/MenuButton";

import CarouselCards from "../components/CarouselCards";



const NewMain = StyleSheet.create(UseMain);

export default function Main({buttons, doSomethingAfterPress}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
   const styles = NewMain();

    const imageUrl = require('../../assets/ciberacoso.png');
    const imageUrl2 = require('../../assets/rutina.png');
    const imageUrl3 = require('../../assets/edificio.png');

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
                    <Searchbar
                        placeholder="Buscar aqui..."
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={styles.searchbar}
                    />
                    <Text style={styles.title}>Actividades de la semana</Text>
                </View>
                <SafeAreaView style={styles.container}>
                    <CarouselCards />
                </SafeAreaView>
                <View>
                    <View style={styles.containercont}>
                        <Text style={styles.title}>Localidad Zonas </Text>
                    </View>
                  
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
                </View>
                <View>
                    <View style={styles.containercont}>
                        <Text style={styles.title}>Institucion </Text>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={styles.containerButton}>
                            <MenuButtom image={imageUrl3} text="quieres somos" onPress={() => console.log('hola')} />
                        </View>
                        <View style={styles.containerButton}>
                            <MenuButtom image={imageUrl} text="Desnuncias o Reclamos" onPress={() => console.log('hola')} />
                        </View>
                        <View style={styles.containerButton}>
                            <MenuButtom image={imageUrl2} text="Todas  la actividades" onPress={() => console.log('hola')} />
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </LinearGradient>
       
    );
}
