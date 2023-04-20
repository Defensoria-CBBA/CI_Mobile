import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from "react-native";
import UseMain from "../theme/style/main";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from 'react-native-paper';

import CarouselCards from "../components/CarouselCards";


const NewMain = StyleSheet.create(UseMain);

export default function Main() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
   const styles = NewMain();
    return (
        <LinearGradient style={{height: '100%'}} 
            colors={['rgb(202,241,198)','rgb(138,228,223)']}
            useAgule={true}
            angle={45}
            angleCenter={{x:0.5, y:0.5}}
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
                    <Text style={styles.title}>Univacion </Text>
                </View>
                
            </View>
        </LinearGradient>
    );
}
