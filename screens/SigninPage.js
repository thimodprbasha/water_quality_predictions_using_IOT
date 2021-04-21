import React, { useEffect, useState } from 'react';
import { FlatList,Button, Text, View, StyleSheet,ActivityIndicator,TextInput,TouchableOpacity, ScrollView  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TestingSensorPage from './TestingSensorPage';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    
    StackedBarChart
  } from "react-native-chart-kit";

  import { Dimensions,TouchableHighlight, Image } from "react-native";

  export default function SigninPage({navigation}) {

 
//   const dataPie = {
//     labels: [,"pH", "Temp", "Turbidity","Conductivity"], // optional
//     data: [,data.ph, data.temp, data.turbidity, data.conductivity]
//   };

const [data,setData] =React.useState({
  email:'',
  password:'',
  check_textInputChange:false,
  secureTextEntry:true,
  isValidPassword:true,
  isValidUser:true
  
});

const textInputChange = (val)=>{
  if(val.trim().length>=4){
    setData({
      ...data,
      email:val,
      check_textInputChange:true,
      isValidUser:true
    });
  }
  else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false,
        isValidUser:false
      });
  }
}
const handelPasswordChange = (val) => {
  if(val.trim().length>=6){
    setData({
      ...data,
      password:val,
      isValidPassword:true
    });
  }
  else{
    setData({
      ...data,
      password:val,
      isValidPassword:false
    });
  }

}

const updateSecuretextEntry = () => {
  setData({
    ...data,
    secureTextEntry:!data.secureTextEntry
  });
}
const pressHandler =() =>
  { navigation.navigate('Home');
}
 

const pressHandler2 =() =>{
navigation.navigate('Signup');
}

const handleValidUser=(val) =>{
if(val.trim().length>=4){
  setData({
    ...data,
    isValidUser:true
  });
}
else{
  setData({
    ...data,
    isValidUser:false
  });
 
}
}
const loginHandle = (email, password) => {

if ( data.email.length >= 4 && data.password.length >= 6 ) {
    navigation.navigate('Home');
}

else if(data.email.length==0||data.password.length==0){
  alert("Please fill the following requirments");
}}


  return (

    <View style={{ flex: 1, padding: 0, backgroundColor:"white" }}>
       {/* {isLoading ? <ActivityIndicator/> : ( */}
          
          <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>

            {/* <View style = {styles.PageCotent}> */}
            {/* <View style = {styles.InnerHeadContent}>
                <Text style = {styles.InnerHeadText}>Welcome to<br/><Text style = {{color:"#0099C9"}}>JalaRead</Text>, mobile</Text>
                <Text style = {styles.InstructionText}>
                Your water testing deviceses, mobile <br/>application on your fingertips
                </Text>
            </View> */}
            <View style = {styles.headContainer}>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={require('../assets/back-arrow-blue.png')} style = {styles.BackArrow} />
                  </TouchableOpacity>

                  <Text style={styles.HeadText}>JalaRead</Text>
                </View>
            </View>

            <View style = {styles.Instruction}>
        
                <Text style={styles.LoginHeadTxt}><Text style={styles.LoginHeadTxtCap}>Sign up</Text><br/>Create an Account</Text>
                <ScrollView style={styles.scrollView} >
                <Animatable.View 
                  animation='fadeInUpBig'
                  style={styles.footer}>
                  <Text style={styles.text_footer}>First Name</Text>
                  <View style={styles.action}>
                    <FontAwesome 
                    name="user-o" 
                    color="#05375a" 
                    size={20}
                    />      

                  <TextInput 
                    placeholder="Enter Your Username" 
                    style={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText={(val) =>textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                    {data.check_textInputChange? 
                  <Animatable.View animation="bounceIn">
              
                  <Feather 
                        name="check-circle" 
                        color="#37E290"
                        size={20}
                        style = {{position:"absolute",right:-150}}
                  />
                  </Animatable.View>
                  :null}
                    </View>
                    {data.isValidUser ? null:
                    <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={styles.errorMsg}>Username must be more than 4 characters.</Text>
                    </Animatable.View>
                    }
                  <Text style={styles.text_footer}>Last Name</Text>
                  <View style={styles.action}>
                    <FontAwesome 
                    name="user-o" 
                    color="#05375a" 
                    size={20}
                    />      

                  <TextInput 
                    placeholder="Enter Your Username" 
                    style={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText={(val) =>textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                    {data.check_textInputChange? 
                  <Animatable.View animation="bounceIn">
              
                  <Feather 
                        name="check-circle" 
                        color="#37E290"
                        size={20}
                        style = {{position:"absolute",right:-150}}
                  />
                  </Animatable.View>
                  :null}
                    </View>
                    {data.isValidUser ? null:
                    <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={styles.errorMsg}>Username must be more than 4 characters.</Text>
                    </Animatable.View>
                    }
                  <Text style={styles.text_footer}>Email</Text>
                  <View style={styles.action}>
                    <FontAwesome 
                    name="user-o" 
                    color="#05375a" 
                    size={20}
                    />      

                  <TextInput 
                    placeholder="Enter Your Username" 
                    style={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText={(val) =>textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                    {data.check_textInputChange? 
                  <Animatable.View animation="bounceIn">
              
                  <Feather 
                        name="check-circle" 
                        color="#37E290"
                        size={20}
                        style = {{position:"absolute",right:-150}}
                  />
                  </Animatable.View>
                  :null}
                    </View>
                    {data.isValidUser ? null:
                    <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={styles.errorMsg}>Username must be more than 4 characters.</Text>
                    </Animatable.View>
                    }
                  <Text style={styles.text_footer}>Contact No</Text>
                  <View style={styles.action}>
                    <FontAwesome 
                    name="user-o" 
                    color="#05375a" 
                    size={20}
                    />      

                  <TextInput 
                    placeholder="Enter Your Username" 
                    style={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText={(val) =>textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                    {data.check_textInputChange? 
                  <Animatable.View animation="bounceIn">
              
                  <Feather 
                        name="check-circle" 
                        color="#37E290"
                        size={20}
                        style = {{position:"absolute",right:-150}}
                  />
                  </Animatable.View>
                  :null}
                    </View>
                    {data.isValidUser ? null:
                    <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={styles.errorMsg}>Username must be more than 4 characters.</Text>
                    </Animatable.View>
                    }
                  <Text style={styles.text_footer}>NIC</Text>
                  <View style={styles.action}>
                    <FontAwesome 
                    name="user-o" 
                    color="#05375a" 
                    size={20}
                    />      

                  <TextInput 
                    placeholder="Enter Your Username" 
                    style={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText={(val) =>textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                    {data.check_textInputChange? 
                  <Animatable.View animation="bounceIn">
              
                  <Feather 
                        name="check-circle" 
                        color="#37E290"
                        size={20}
                        style = {{position:"absolute",right:-150}}
                  />
                  </Animatable.View>
                  :null}
                    </View>
                    {data.isValidUser ? null:
                    <Animatable.View animation='fadeInLeft' duration={500} >
                    <Text style={styles.errorMsg}>Username must be more than 4 characters.</Text>
                    </Animatable.View>
                    }
                    
                    <Text style={[styles.text_footer, {
                      marginTop:20
                      }]}>Password</Text>
                  
                    <View style={styles.action}>

                    <Feather 
                        name="lock" 
                        color="#05375a"
                        size={20}
                        
                  />
                    
                  <TextInput 
                    placeholder="Enter Your Password" 
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput } 
                    autoCapitalize="none"
                    onChangeText={(val) =>handelPasswordChange(val)}
                  
                  />
                  <TouchableOpacity onPress={
                    updateSecuretextEntry
                  }>
                    {data.secureTextEntry ?
                  <Feather 
                        name="eye-off" 
                        color="grey"
                        size={20}
                        style = {{position:"absolute",right:-150}}
                  />
                      :
                      <Feather 
                      name="eye" 
                      color="grey"
                      size={20}
                      style = {{position:"absolute",right:-150}}
                  />
                    }
                  </TouchableOpacity>
                    </View>
                    { data.isValidPassword ? null:
                    <Animatable.View animation='fadeInLeft' duration={500}>
                    <Text style={styles.errorMsg}>Password must be more than 6 characters.</Text>
                    </Animatable.View>
                    }
                  </Animatable.View>
                  </ScrollView>
            </View>
            <View style = {styles.BottomButtomContainer}>
                <TouchableOpacity style={styles.BottomButtom} onPress={() => navigation.navigate('WelcomePage')}>
                    <Text style={styles.BottomButtomText}>Continue</Text>
                </TouchableOpacity>
                <Text style={styles.BottomButtomCapText}>Already have an account? <Text style={{color:'#FF7B8A'}}>Login</Text></Text>
            </View>

            {/* </View> */}
        </View>
      {/* )} */}
    </View>
  );
};

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

  const styles = StyleSheet.create({

    scrollView: {
      position:"absolute",
      height: '100%',
      width: '100%',
      margin: 20,
      alignSelf: 'center',
      padding: 20,
      borderWidth: 1,
      borderRadius: 5,
      top:"10%"
      // borderColor: 'black',
      // backgroundColor: 'lightblue'
    },
    textInput:{
      marginLeft:10,
      fontFamily:"SF Pro Rounded",
    },

    text_footer:{
      color: '#626263',
      fontSize: 16,
      fontWeight:600,
      fontFamily:"SF Pro Rounded",
      marginTop:20
    },
    errorMsg: {
      color: '#C70039',
      fontSize: 14,
      fontFamily:"SF Pro Rounded",
      marginBottom:5
  },
    footer:{
      paddingBottom:"0%",
      position:"absolute",
      width:"80%",
      marginLeft:"3%",
      // marginTop:"5%"
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },

      BottomButtomContainer:{
        // flex: 1,
        postion:"absolute",
        // bottom:100,
        // left:-27,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "transparent",
        bottom:'0%',
        height:'20%',
        // marginTop:'5%',
        // marginBottom:'5%',
        // borderWidth:3,
        marginTop:0,
        
        // paddingTop: 200,
      },

      BottomButtom: {
        width: "40%",
        borderRadius: 11,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030082",
        // marginBottom: 0
    },

      BottomButtomText:{
        fontSize:16,
        fontWeight:600,
        color:'white',
        fontFamily:"SF Pro Rounded",
      },

      BottomButtomCapText:{
        fontSize:13,
        fontWeight:600,
        color:'#515151',
        marginTop:10,
        fontFamily:"SF Pro Rounded",
      },

      
    HeadText:{
        position:"absolute",
        // fontFamily:"ubuntu",
        fontFamily:"SF Pro Rounded",
        fontSize:23,
        fontWeight:"bold",
        color:"#030093",
        top:"50%",
        right:30,
      },
      LoginHeadTxt:{
        position:"absolute",
        // fontFamily:"ubuntu",
        fontFamily:"SF Pro Rounded",
        fontSize:23,
        fontWeight:800,
        color:"#030093",
        top:0,
        left:30,
      },
      LoginHeadTxtCap:{
        // fontFamily:"ubuntu",
        fontFamily:"SF Pro Rounded",
        fontSize:16,
        fontWeight:600,
        color:"#626263",
      },
  
      HeadTextCap:{
        position:"absolute",
        fontFamily:"SF Pro Rounded",
        fontSize:14,
        // fontWeight:"bold",
        color:"#D1E1FF",
        top:103,
        left:30,
      },

      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: "#EFFBFF",
    },
    headContainer: {
        flex: 1,
        position:"absolute",
        width:Dimensions.get("window").width,
        height:"26%",
    },
    headContent: {
        flex: 1,
        // width:Dimensions.get("window").width,
        // height: "10%",
    },

    

    InnerHeadContent:{
        // flex: 1,
        postion:"absolute",
        // bottom:100,
        // left:-27,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "transparent",
        top:'12%',
        height:'10%',
        marginTop:'5%',
        marginBottom:'5%',
        backgroundColor:"white",
        borderStyle:'solid',
        borderWidth:0,
        // borderColor:"#030096",
        borderRadius:25,
        paddingTop:50
        // borderWidth:3,
        // paddingTop: 200,
      },

      InnerHeadText:{
        fontSize:35,
        fontWeight:'bold',
        color:'#00397C',
        postion:'absolute',
        fontFamily:"SF Pro Rounded",
        bottom:180,
        textAlign:"center",
        lineHeight:30,
        marginBottom:15
      },

      Instruction:{
         // flex: 1,
         postion:"absolute",
         // bottom:100,
         // left:-27,
         alignItems: "center",
         justifyContent: 'center',
         backgroundColor: "transparent",
         top:'20%',
         height:'50%',
         width:Dimensions.get("window").width,
         marginRight:0,
         marginTop:'5%',
        //  marginBottom:'5%',
        //  borderWidth:3,
         
         // paddingTop: 200,
      },


      InstructionNum: {
        postion:'absolute',
        flexDirection: 'row',
        width:'80%',
        // borderWidth: 1,
        padding: 27,
        paddingBottom:15,
        paddingTop:10,
    
        borderColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white'
     },
    

     InstructionText:{
      color:'#626263',
      fontSize:16,
      fontWeight:600,
      textAlign:"center",
      fontFamily:"SF Pro Rounded",
      paddingBottom:5,
     },

     StartLogo:{
      // justifyContent: 'center',
      // alignItems: 'center',
      width:25,
      height:25,
      marginRight:"10%",
      marginTop:10
  },
  LoginPageImg:{
    // justifyContent: 'center',
    // alignItems: 'center',
    width:287,
    height:261,
    postion:"absolute",
    bottom:"30%",
  },

  WelcomeLogo:{
    width:70,
    height:70,
    postion:"absolute",
    bottom:"100%",
  },

  input: {
    height: 40,
    margin: 12,
    width:270,
    borderBottomWidth: 1,
    textAlign:"center",
  },

  BackArrow:{
    // justifyContent: 'center',
    // alignItems: 'center',
    width:10,
    height:17,
    marginLeft:30,
    marginTop:30,
},

});