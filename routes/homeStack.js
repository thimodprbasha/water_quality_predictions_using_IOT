 import React from "react";
 import {createStackNavigator} from 'react-navigation-stack';
 import {createAppContainer} from 'react-navigation';
 import Home from '../screens/home';
 import login from '../screens/login';
 const screens= {
   
 Home: {
     screen:Home,
     navigationOptions: {
        header: null,
      }
 },
 Login: {
     screen:login,
   
 }

 }

 const HomeStack = createStackNavigator(screens);
 export default createAppContainer(HomeStack);
