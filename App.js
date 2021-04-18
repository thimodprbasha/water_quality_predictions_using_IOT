import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './screens/Dashboard';
import Ph from './screens/Ph';
import TestingPage from './screens/TestingPage';
import TestingLoadingPage from './screens/TestingLoadingPage';
import TestingSensorPage from './screens/TestingSensorPage';
import StartPage from './screens/StartPage';
import WaterTestingScreen from './screens/WaterTestingScreen';
import TestedAreas from './screens/TestedAreas';
import MonthlyResults from './screens/MonthlyResults';
import LocationInput from './screens/LocationInput';
import Navigator from './homeStack';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();

export default function App() {
  
  // return <StartPage/>
  // return <WaterTestingScreen/>
  // return <LocationInput/>
  // return <TestedAreas/>
  // return <MonthlyResults/>
  // return <Ph/>

  // return <Dashboard/>
  // return <TestingPage/>
  return <Navigator/>
  // return <TestingSensorPage/>
  // return <TestingLoadingPage/>
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="TestingPage" component={TestingPage} />
  //       <Stack.Screen name="TestingSensorPage" component={TestingSensorPage} />
  //       <Stack.Screen name="TestingLoadingPage" component={TestingLoadingPage} />
  //       <Stack.Screen name="WaterTestingScreen" component={WaterTestingScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  
}


