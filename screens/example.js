import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import CircleChart from "react-native-circle-chart";
import { LinearGradient } from 'expo-linear-gradient';
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
import { ActivityIndicator } from "react-native";

export default function App() {

  return (
    
    <View style = {styles.container}>
      <View style = {styles.headContainer}>
        {/* <Text style = {styles.HeadText}>Dashboard</Text> */}
        <LinearGradient
        // Button Linear Gradient
        colors={['#001A4B', '#002B7B']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        style={styles.headContent}
        >
        <Text style={styles.HeadText}>Quality test</Text>
        <Text style={styles.HeadTextCap}>Water quality results</Text>
      </LinearGradient>
      </View>
      
      <View style = {styles.pieChart}>
        {/* <Text style = {styles.ChartHead}>Stats</Text> */}
        <ProgressChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "transparent",
            backgroundGradientTo: "transparent",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(3, 0, 150, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(2, 0, 88, ${opacity})`,
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

        

        {/* <LineChart
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
        /> */}
      </View>
      {/* <TouchableOpacity style={styles.Btn3} >
            <Text style={styles.loginText3}>Alkaline</Text>
      </TouchableOpacity> */}
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



// const chartConfig = {
//   backgroundGradientFrom: "#1E2923",
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: "#08130D",
//   backgroundGradientToOpacity: 0.5,
//   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//   strokeWidth: 2, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false // optional
// };

const data = {
  labels: ["pH", "Temp", "Turbidity"], // optional
  data: [0.4, 0.7, 0.8]
};

// const result = await CircleChart.multiply(3, 7);

const styles = StyleSheet.create({

  Btn3: {
    position: 'absolute',
    right:20,
    width: "40%",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#5DAFFF',
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    backgroundColor: "transparent",
    marginBottom: 10
},
  
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: "#EFFBFF",
    },
    headContainer: {
        flex: 1,
        width:Dimensions.get("window").width,
        height:100,
    },
    headContent: {
        flex: 1,
        // width:Dimensions.get("window").width,
        // height:100,
    },

    ChartHead:{
      textAlign: "left"
    },

    HeadText:{
      position:"absolute",
      // fontFamily:"ubuntu",
      fontSize:22,
      fontWeight:"bold",
      color:"white",
      top:63,
      left:30,
    },

    HeadTextCap:{
      position:"absolute",
      fontSize:12,
      // fontWeight:"bold",
      color:"#D1E1FF",
      top:93,
      left:30,
    },

    image: {
        marginBottom: 40,
        height:100,
        widht:100
    },

    pieChart:{
      // flex: 1,
      postion:"absolute",
      bottom:200,
      left:-27,
      alignItems: "center",
      justifyContent: 'flex-end',
      backgroundColor: "transparent",
      paddingTop: 300,
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