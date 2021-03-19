import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
// import ProgressCircle from 'react-native-progress-circle'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function App() {

  return (
    <ImageBackground 
                style = {styles.container} 
                source={require('../assets/black-bg.jpg')}>
                    <Text style={styles.PageHead}>pH METER</Text>
    <View style = {styles.logoContainer}>
                     {/* <Image style = {styles.logo}  source={require('../assets/jalaread-logo.png')}/> */}
                     {/* <Text style={styles.logoText}>JALAread.</Text> */}

                     <AnimatedCircularProgress
                        size={200}
                        width={8}
                        fill={50}
                        tintColor="#5DFF7E"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#3d5875" > 
                    {/* <Text style={{ fontSize: 18 }}>{'30%'}</Text> */}
                    {
                    
                        (fill) => (
                        <Text style={styles.points}>
                             7.0 pH
                        </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <Text style={styles.logoText}>JALAread.</Text>


                 </View>

                
                    <TouchableOpacity style={styles.Btn1} >
                        <Text style={styles.loginText1}>Neutral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btn2} >
                        <Text style={styles.loginText2}>Acid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btn3} >
                        <Text style={styles.loginText3}>Alkaline</Text>
                    </TouchableOpacity>

                    <Text style={styles.info}>Pure water has a pH of 7 and is considered “neutral” because it has neither acidic nor basic qualities.</Text>
                    
      
    {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
    },

    image: {
        marginBottom: 40,
        height:100,
        widht:100
    },

    Btn1: {
        position: 'absolute',
        width: "20%",
        borderRadius: 25,
        
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 100,
        backgroundColor: "#5DFF7E",
        marginBottom: 10
    },
    Btn2: {
        position: 'absolute',
        left:80,
        width: "20%",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#FF5D67',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 100,
        backgroundColor: "transparent",
        marginBottom: 10
    },
    Btn3: {
        position: 'absolute',
        right:80,
        width: "20%",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#5DAFFF',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 100,
        backgroundColor: "transparent",
        marginBottom: 10
    },
    btnContainer:{
        position: 'absolute',
        top: 200,
        alignItems: "center",
        flexDirection: 'row',
    },
    registerBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 50,
        backgroundColor: "transparent",
    },
    logo: {
        width:100,
        height:100,
    },
    logoContainer:{
        position: 'absolute',
        top: 200,
        alignItems: "center",
        // color: "fff"
    },
    logoText: {
        paddingTop: 15,
        color: 'white',
        fontSize : 20,
        // fontStyle: fontStyles[],
        fontWeight: "bold",
    },
    info: {
        position: "absolute" ,
        // paddingTop: 35,
        color: 'white',
        fontSize : 14,
        // fontStyle: fontStyles[],
        bottom: 30,
        left: 60,
        right:60,
        
    },
    loginText1: {
        color:"black",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    loginText2: {
        color:"#FF5D67",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    loginText3: {
        color:"#5DAFFF",
        fontSize: 16,
        fontWeight: "bold",
        
    },
    registerText: {
        color:"#00FFFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 57,
        left: 16,
        width: 150,
        textAlign: 'center',
        color: '#5DFF7E',
        fontSize: 50,
        fontWeight: "100"
      },
      PageHead: {
        position: 'absolute',
        top: 50,
        paddingTop: 15,
        color: 'white',
        fontSize : 30,
        // fontStyle: fontStyles[],
        fontWeight: "bold",
      }

});