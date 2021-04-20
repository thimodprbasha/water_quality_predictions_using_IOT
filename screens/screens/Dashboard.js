import React, { useEffect, useState } from 'react';
import { FlatList,Button, Text, View, StyleSheet,ActivityIndicator,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
// import TestsResults from '../assets/TestsResults.json';
import * as data from '../assets/TestsResults.json';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  import { Dimensions,TouchableHighlight,TouchableOpacity  } from "react-native";
import AdminSignin from './AdminSignin';

  export default function Dashboard({navigation}) {

    
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // console.log(data);

  
  // useEffect(() => {
  //   fetch(TestsResults)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  const dataPie = {
    labels: [,"pH", "Temp", "Turbidity","Conductivity"], // optional
    data: [,(data.value_params.ph*7.14)/100, data.value_params.temp/100, (data.value_params.turbidity*2)/100, (data.value_params.conduct*2)/100]
  };

//   const dataPie = {
//     labels: [,"pH", "Temp", "Turbidity","Conductivity"], // optional
//     data: [,data.ph, data.temp, data.turbidity, data.conductivity]
//   };

const [currentDate, setCurrentDate] = useState('');
const [currentMonth, setCurrentMonth] = useState('');
const [prevMonth, setPrevMonth] = useState('');

  useEffect(() => {
    var monthNames = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var date = new Date().getDate(); //Current Date
    var month = monthNames[new Date().getMonth()]; //Current Month
    var prevMonth = monthNames[data.month-1]; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date 
    );
    setCurrentMonth(
      month 
    );
    setPrevMonth(
      prevMonth
    );
  }, []);

  var prevDate = data.date;
  var prevYear = data.year;

  const getUser = (UserId) => {
    while(true){
      if(UserId = signedinId){
        return "TestingPage"
      }
      var i = i + 1;
    }
    return "AdminSignin"
  }

  const user = () => {
    return "AdminSignin"
    // return "TestingPage"
  }



  return (

    <View style={{ flex: 1, padding: 0, backgroundColor:"white"}}>
      {/* {isLoading ? <Text>Loading...</Text> :           */}
          <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>


        
        <View style = {styles.headContainer}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#EEF2FF', '#ffffff']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
                style={styles.headContent}
                >
                {/* <Image source={require('../assets/back-arrow-blue.png')} style = {styles.BackArrow} /> */}

                <Text style={styles.HeadText}>Hello,<br/>Jane Cooper</Text>
                <Text style={styles.HeadTextCap}>Dashboard</Text>
                {/* <Text style={styles.Date}>{currentDate}<br/><Text style={{fontSize:11, fontWeight:500}}>{currentMonth}</Text></Text> */}
            </LinearGradient>
        </View>


        <View style = {styles.StatusContainer} >
          <LinearGradient
                // Button Linear Gradient
                colors={['#EEF2FF', '#ffffff']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
                style={styles.headContent}
                >

              <View style = {styles.OptionContainer}>
                <TouchableOpacity  onPress={() => navigation.navigate('MonthlyResults')}>
                  <View style = {styles.OptionBox1} > 
                  <Image source={require('../assets/calendar-green.png')} style = {styles.CalendarIcon} />
                    <Text style = {styles.OptTxtCap}>Previous<br/>tests</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate(user())}>
                  <View style = {styles.OptionBox1}> 
                  <Image source={require('../assets/beaker-blue-light.png')} style = {styles.BeakerIcon} />
                    <Text style = {styles.OptTxtCap}>Test<br/>water</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('TestedAreas')}>
                  <View style = {styles.OptionBox1}> 
                  <Image source={require('../assets/location-pin-red.png')} style = {styles.PinIcon} />
                    <Text style = {styles.OptTxtCap}>Find<br/>resources</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <TouchableOpacity style = {styles.PreviouseBtn} onPress={() => navigation.navigate('WaterTestingScreen')} >
                <LinearGradient
                  // Button Linear Gradient
                  colors={['#030092', '#0400C9']} 
                  start={{ x: 1, y: 1 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.PreviouseBtnGrad}
                  >
                    <Image source={require('../assets/select-arrow-right.png')} style = {styles.SelectArrow} /> 
                    <Text style={styles.slctCntnrTxt}>Previous results</Text>
                    <Text style={styles.slctCntnrTxtCap}>Water quality results</Text>
                    <Text style={styles.selectDate}>{prevDate}<br/><Text style={{fontSize:11, fontWeight:700}}>{prevMonth}</Text></Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style = {styles.BottomContent}>
                <Text style={styles.BttmCntntTxt}>Quality test</Text>
                <Text style={styles.BttmCntntTxtCap}>Water quality results</Text>
                <LineChart
                  data={linedata}
                  width={deviceWidth-40}
                  height={220}
                  chartConfig={chartConfig}
                  style={styles.lineChart}
                />
              </View>

          </LinearGradient>
        </View>
        </View>
      
    </View>
  );
};

const linedata = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 4,// optional
      
    }
  ],
  legend: ["Quality Tests"] // optional
};

const chartConfig = {
  backgroundGradientFrom: "#030092",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#0400C9",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage:0.5,
  useShadowColorFromDataset: false, // optional
  
};




  // add this to a button
  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const MyActivityIndicator = () => {
	return (
      	<View style={{ flex: 1, justifyContent: "center"}}>
      		//size can be "small" or "large"
			<ActivityIndicator size="large" color="#00ff00" />
      	</View>
    );
}

// export default MyActivityIndicator;
let deviceWidth = Dimensions.get('window').width

  const styles = StyleSheet.create({

   
      BackArrow:{
        // justifyContent: 'center',
        // alignItems: 'center',
        width:10,
        height:17,
        marginLeft:30,
        marginTop:50,
      },

      CalendarIcon:{
        position:"absolute",
        top:"21%",
        width:30,
        height:33.5,
        marginBottom:5
      },
      BeakerIcon:{
        position:"absolute",
        top:"21%",
        width:35,
        height:33.5,
        marginBottom:5
      },
      PinIcon:{
        position:"absolute",
        top:"21%",
        width:26,
        height:31,
        marginBottom:5
      },

      OptTxtCap:{
        position:"absolute",
        textAlign:"center",
        fontFamily:"SF Pro Rounded",
        fontWeight:600,
        lineHeight:15,
        paddingBottom:0,
        color:"#525252",
        bottom:"15%",
      },

      SelectArrow:{
        // justifyContent: 'center',
        // alignItems: 'center',
        position:"absolute",
        width:8,
        height:15,
        top:"45%",
        right:30,
        opacity:1,
      },

      Date:{
        position:"absolute",
        // fontFamily:"ubuntu",
        fontSize:19,
        fontWeight:"bold",
        color:"white",
        top:95,
        right:30,
        backgroundColor:"#030096",
        borderStyle:'solid',
        borderWidth:1,
        borderColor:"#030096",
        borderRadius:5,
        padding:7,
        paddingTop:10,
        paddingBottom:10,
        lineHeight: 15,
        textAlign: "center",
      },
      selectDate:{
        position:"absolute",
        // fontFamily:"ubuntu",
        fontSize:19,
        fontWeight:800,
        color:"#0400C9",
        top:"24%",
        left:22,
        backgroundColor:"white",
        borderStyle:'solid',
        borderWidth:1,
        borderColor:"white",
        borderRadius:5,
        padding:7,
        paddingTop:10,
        paddingBottom:10,
        lineHeight: 15,
        textAlign: "center",
      },

      HeadText:{
        position:"absolute",
        fontFamily:"SF Pro Rounded",
        fontSize:30,
        fontWeight:700,
        color:"#030093",
        top:"40%",
        left:30,
        lineHeight:32
      },
  
      HeadTextCap:{
        position:"absolute",
        fontSize:20,
        // fontWeight:"bold",
        fontFamily:"SF Pro Rounded",
        color:"#626263",
        top:"15%",
        left:30,
        fontWeight:700,
      },


      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: "#EFFBFF",
    },

    StatusContainer:{
      postion:"absolute",
      width:deviceWidth,
      top:"30%",
      height:"100%",
      // backgroundColor:"black",
    },

    OptionContainer:{
      postion:"absolute",
      width:deviceWidth,
      height:"20%",
      flexDirection:"row"
    },

    OptionBox1:{
      postion:"absolute",
      width:deviceWidth/3.8,
      marginLeft:22,
      height:"75%",
      bottom:0,
      top:0,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "white",
      marginTop: 0,
      marginBottom: 0,
      // flexDirection: 'row',
      borderStyle:'solid',
      borderWidth:0,
      borderRadius:25,
      shadowColor: "rgba(0,0,0,0.6)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 15,

      elevation: 12,
      
    },

    PreviouseBtn:{
      postion:"absolute",
      width:deviceWidth-40,
      marginLeft:20,
      height:"15%",
      // bottom:0,
      // top:"0%",
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "white",
      marginTop: 0,
      marginBottom: 0,
      // flexDirection: 'row',
      borderStyle:'solid',
      borderWidth:0,
      borderRadius:25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,

      elevation: 12,
      
    },
    BottomContent:{
      postion:"absolute",
      width:deviceWidth-40,
      marginLeft:20,
      height:"60%",
      // bottom:0,
      // top:"0%",
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "white",
      marginTop: "9%",
      marginBottom: 0,
      // flexDirection: 'row',
      borderStyle:'solid',
      borderWidth:0,
      borderRadius:25,
      borderBottomEndRadius:0,
      borderBottomLeftRadius:0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,

      elevation: 12,
      
    },



    headContainer: {
        flex: 1,
        position:"absolute",
        width:deviceWidth,
        height:"30%",
    },


    headContent: {
        flex: 1,
        width:"100%",
        borderStyle:'solid',
        borderWidth:0,
        borderRadius:0,
        // width:Dimensions.get("window").width,
        // height: "10%",
    },

    PreviouseBtnGrad:{
      flex: 1,
      width:"100%",
      borderStyle:'solid',
      borderWidth:0,
      borderRadius:25,
    },

    slctCntnrTxt:{
      position:"absolute",
      fontFamily:"SF Pro Rounded",
      fontSize:22,
      fontWeight:"bold",
      color:"white",
      top:"27%",
      left:80,
      lineHeight:20,
    },

    slctCntnrTxtCap:{
      position:"absolute",
      fontSize:12,
      fontFamily:"SF Pro Rounded",
      // fontWeight:"bold",
      color:"rgba(255, 255, 255, 1)",
      top:"51%",
      left:80,
    },

    BttmCntntTxt:{
      position:"absolute",
      fontSize:22,
      fontWeight:"bold",
      fontFamily:"SF Pro Rounded",
      color:"#00397C",
      top:"10%",
    },

    BttmCntntTxtCap:{
      position:"absolute",
      fontFamily:"SF Pro Rounded",
      fontSize:16,
      fontWeight:600,
      color:"#626263",
      top:"16%",
    },

    lineChart:{
      marginTop:"15%",
      fontWeight:700,
      fontFamily:"SF Pro Rounded",
      // paddingTop:"10%",
    }

});