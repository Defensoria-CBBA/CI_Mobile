import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';


const Searchg = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <Searchbar
                placeholder="Buscar aqui..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchbar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#fffff999',
        elevation: 1,
        borderColor: '#000000',
    },
});
export default Searchg;
