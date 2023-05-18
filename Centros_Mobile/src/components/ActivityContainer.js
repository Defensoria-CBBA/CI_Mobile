import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ActivityContainer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>


            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
});


export default ActivityContainer;
