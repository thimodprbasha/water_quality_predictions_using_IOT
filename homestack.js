import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer, getActiveChildNavigationOptions} from 'react-navigation';
import Home from './screens/home';
import login from './screens/login';
import Dashboard from './screens/Dashboard';
import TestingPage from './screens/TestingPage';
import TestingSensorPage from './screens/TestingSensorPage';
import TestingLoadingPage from './screens/TestingLoadingPage';
import WaterTestingScreen from './screens/WaterTestingScreen';
import LocationInput from './screens/LocationInput';
import MonthlyResults from './screens/MonthlyResults';
import TestedAreas from './screens/TestedAreas';
import AdminSignin from './screens/AdminSignin';
const screens= {
// Home: {
//     screen:Home
// },
// Login: {
//     screen:login
// },
Dashboard: {
    screen:Dashboard,
    navigationOptions:{
        header:null,
    }
},
TestingPage: {
    screen:TestingPage,
    navigationOptions:{
        header:null,
    }
},
TestingSensorPage: {
    screen:TestingSensorPage,
    navigationOptions:{
        header:null
    }
},
TestingLoadingPage: {
    screen:TestingLoadingPage,
    navigationOptions:{
        header:null
    }
},
WaterTestingScreen: {
    screen:WaterTestingScreen,
    navigationOptions:{
        header:null
    }
},
LocationInput: {
    screen:LocationInput,
    navigationOptions:{
        header:null
    }
},
MonthlyResults: {
    screen:MonthlyResults,
    navigationOptions:{
        header:null
    }
},
TestedAreas: {
    screen:TestedAreas,
    navigationOptions:{
        header:null
    }
},
AdminSignin: {
    screen:AdminSignin,
    navigationOptions:{
        header:null
    }
},

}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);

// const Stack = createStackNavigator();

// export default function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Dashboard" component={Dashboard} />
//       <Stack.Screen name="TestingPage" component={TestingPage} />
//       <Stack.Screen name="TestingSensorPage" component={TestingSensorPage} />
//       <Stack.Screen name="TestingLoadingPage" component={TestingLoadingPage} />
//       <Stack.Screen name="WaterTestingScreen" component={WaterTestingScreen} />
//     </Stack.Navigator>
//   );
// }
