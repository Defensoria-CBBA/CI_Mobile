import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Title from './Title';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
    
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      >
        
      </Image>
      <View style={styles.containerTitle}>
        <Title />
              <View style={styles.containercont}>
                  <Text style={styles.header}>{item.title}</Text>
                  <Text style={styles.body}>{item.body}</Text>
              </View>
      </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop:0,
    //redondear las esquinas
    overflow: 'hidden',

    
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    resizeMode: 'cover',
  },
  header: {
    color: "#222",  
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  containerTitle:{
    backgroundColor: 'transparent',
    //subirlo arriva de la imagen
    marginTop: -95,
  },
  containercont: {
        backgroundColor: 'transparent',
        marginTop: -61,
        
    }
})

export default CarouselCardItem;