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
     navigationOptions: {
        title: 'Create an account',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor:'#000080'
        }
        
      }
   
 }

 }

 const HomeStack = createStackNavigator(screens);
 export default createAppContainer(HomeStack);
