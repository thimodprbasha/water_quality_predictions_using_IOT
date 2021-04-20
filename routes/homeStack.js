import {createStackNavigator} from 'react-navigation-stack';
 import {createAppContainer} from 'react-navigation';
 import Home from '../screens/home';
 import login from '../screens/login';
 import Signup from '../screens/signup';
 const screens= {
   
 Home: {
     screen:Home,
     navigationOptions: {
        header: null,
      }
 },
 Login: {
     screen:login,
     navigationOptions: {
      header: null,
        
      }
   
 },
 Signup: {
  screen:Signup,
     navigationOptions: {
      header: null,
        
      }
},

 }

 const HomeStack = createStackNavigator(screens);
 export default createAppContainer(HomeStack);