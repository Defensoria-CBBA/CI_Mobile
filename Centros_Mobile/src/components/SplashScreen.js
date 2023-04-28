
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Menu from '../components/Menu';


// Logo....

import Logo from '../components/logo.png';
const BGColor = "#E6C6F1"


export default function SplashScreen() {
    console.disableYellowBox = true;
    const [token, setToken] = useState(null);

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {


        // Starting Animation after 500ms....
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices...
                        toValue: -Dimensions.get('window').height,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling to 0.35
                        toValue: 0.3,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        // Scaling to 0.8
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: (Dimensions.get("window").width / 2) - 35,
                            y: (Dimensions.get('window').height / 2) - 5
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: 0,
                            // Since image size is 100...
                            y: (Dimensions.get('window').height / 2) - 150
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 1500);

    }, [])


        return (
          
            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                
            }}>
                <Animated.View style={{
                  
                    flex: 1,
                    //backgroundColor: BGColor,
                    zIndex: 1,
                    transform: [
                        { translateY: startAnimation }
                    ]
                }}>
                  <LinearGradient style={{ height: '100%' }}
                    colors={['rgb(230,198,241)','rgb(151,236,255)','rgb(202,241,198)']}
                    useAgule={true}
                    angle={45}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                  >
                    <Animated.View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Animated.Image source={Logo} style={{
                            width: 150,
                            height: 150,
                            marginBottom: 20,
                            transform: [
                                { translateX: moveLogo.x },
                                { translateY: moveLogo.y },
                                { scale: scaleLogo },
    
                            ]
                        }}></Animated.Image>
    
                        <Animated.Text style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            color: 'white',
                            transform: [
                                { translateY: moveTitle.y },
                                { scale: scaleTitle }
                            ]
                        }}>GUARDERIAS</Animated.Text>

                        <Animated.Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white',
                            transform: [
                                { translateY: moveTitle.y },
                                { scale: scaleTitle }
                            ]
                        }}>CENTROS INFANTILES</Animated.Text>
    
                    </Animated.View>
                    </LinearGradient>
                </Animated.View>
    
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.04)',
                    zIndex: 0,
                    transform: [
                        { translateY: contentTransition }
                    ]
                }}>
                <Menu></Menu>
              </Animated.View>
                

            </View>
        );
      // Going to Move Up like Nav Bar...
    
}