import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack';
import Login from './screens/login';
import Signup from './screens/signup';
export default function App() {

    return (
      <Navigator/>
     );
  
}