import React,{useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity , TextInput, Modal} from "react-native";
import UseAct from "../theme/style/claims";
import { LinearGradient } from "expo-linear-gradient";
import { set } from "react-native-reanimated";

const NewActivity = StyleSheet.create(UseAct);
export default function Claims({ navigation }) {
    const styles = NewActivity();
    //que aparesca un mensaje de que se envio correctamente
    const handelModal= () => {
        setenviado(true);
    }
    const [enviado, setenviado] = useState(false);

    setTimeout(() => {
        setenviado(false);
    }, 3000);
    
    return (
        <LinearGradient style={{ height: '100%' }}
            colors={['rgb(202,241,192)', 'rgb(138,228,223)']}
            useAgule={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.5 }}
        >
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Text style={styles.title}
                    >Centro:</Text>
                    <TextInput 
                    maxLength={30}
                    style={styles.input} placeholder="nombre del centro"/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}
                    >Descripción:</Text>
                    <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={styles.input2} placeholder="el reclamo o queja es completamente anonimo"/>
                </View>
                <TouchableOpacity style={styles.button} onPress={handelModal}>
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableOpacity>
                <Modal visible={enviado} transparent>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>¡Enviado correctamente!</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </LinearGradient>
    );
}