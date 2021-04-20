import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import CircleChart from "react-native-circle-chart";
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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Dimensions  } from "react-native";

export default function App() {

  return (
    
    <View style = {styles.container}>
      <Text style = {styles.HeadText}>Dashboard</Text>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#FFFFFF",
          backgroundGradientFrom: "#0036DF",
          backgroundGradientTo: "#001862",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff"
          }
        }}
        hideLegend={false}
      />
      <View style = {styles.linearChart}>
        <Text style = {styles.ChartHead}>Stats</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={180}
          yAxisLabel="WQ "
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#FFFFFF",
            backgroundGradientFrom: "#0036DF",
            backgroundGradientTo: "#001862",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#fff"
            }
          }}
          bezier
          style={{
            marginVertical: 10,
            borderRadius: 0,
            padding:0,
          }}
        />
      </View>
     {/* <View style = {styles.logoContainer}>
      //                  <Image style = {styles.logo}  source={require('../assets/jalaread-logo.png')}/>
      //                  <Text style={styles.logoText}>JALAread.</Text>
      // </View>

      //   <StatusBar style="auto" />

      //   <TouchableOpacity style={styles.loginBtn} >
      //     <Text style={styles.loginText}>Login</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity style={styles.registerBtn} >
      //     <Text style={styles.registerText}>Register</Text>
      //   </TouchableOpacity> */}
    </View>
    
  );
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const data = {
  labels: ["pH", "Temp", "Turbidity"], // optional
  data: [0.4, 0.6, 0.8]
};

// const result = await CircleChart.multiply(3, 7);

const styles = StyleSheet.create({

  

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: "#EFFBFF",
        padding: 5,
        margin:10
    },

    ChartHead:{
      textAlign: "left"
    },

    HeadText:{
      position:"absolute",
      fontSize:20,
      fontWeight:"bold",
      top:30,
      left:10,
    },

    image: {
        marginBottom: 40,
        height:100,
        widht:100
    },

    linearChart:{
      // flex: 1,
      postion:"absolute",
     
        alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: "transparent",
        padding: 5,
    },

    loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 50,
        backgroundColor: "#00FFFF",
        marginBottom: 10
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
        
        // color: "fff"
    },
    logoText: {
        paddingTop: 15,
        color: 'white',
        fontSize : 20,
        // fontStyle: fontStyles[],
        fontWeight: "bold",
    },
    loginText: {
        color:"black",
        fontSize: 18,
        fontWeight: "bold",
        
    },
    registerText: {
        color:"#00FFFF",
        fontSize: 18,
        fontWeight: "bold"
    }

});