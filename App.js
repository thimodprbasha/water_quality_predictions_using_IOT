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
import Example from './screens/Example';
import AdminSignin from './screens/AdminSignin';
import WelcomePage from './screens/WelcomePage';
import SigninPage from './screens/SigninPage';
// import Loginex from './screens/Loginex';
import LoginPage from './screens/LoginPage';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();

export default function App() {
  
  // return <StartPage/>
  // return <Example/>
  // return <WaterTestingScreen/>
  // return <LocationInput/>
  // return <TestedAreas/>
  // return <MonthlyResults/>
  // return <Ph/>
  // return <Loginex/>
  // return <SigninPage/>
  // return <LoginPage/>

  // return <AdminSignin/>
  // return <Dashboard/>
  // return <TestingPage/>
  return <Navigator/>
  return <WelcomePage/>
  return <TestingSensorPage/>
  // return <TestingLoadingPage/>
  
}


