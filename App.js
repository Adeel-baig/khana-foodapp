import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterPage from './Components/Register';
import LoginPage from './Components/Login';
import LandingPage from './Components/LandingPage';
import PublicUserDashboard from './Components/PublicUserDashboard';
import PublicUserMap from './Components/PublicUserMap';
import firebase from 'firebase';
import PublicUser from './Components/PublicUser';
import Branch from './Components/Branch';
import UserStatus from './Components/UserStatus';
import { LogBox } from 'react-native';


// LogBox.ignoreAllLogs();
// LogBox.ignoreLogs(['Setting a timer for a long period of time'])
LogBox.ignoreLogs(['Setting a timer']);
const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBEYG7I37aaQhlIgJ4KcVeyKSwlkZtIGqc",
  authDomain: "khana-app-a1bbc.firebaseapp.com",
  projectId: "khana-app-a1bbc",
  storageBucket: "khana-app-a1bbc.appspot.com",
  messagingSenderId: "729855694813",
  appId: "1:729855694813:web:14578b47045eaaba710834",
  measurementId: "G-JNQFY3FZSQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage"  options={{headerShown:false }}  component={LandingPage} />
        <Stack.Screen name="PublicUser" options={{headerShown:false }} component={PublicUser} />
        <Stack.Screen name="Status"  component={UserStatus} />
        <Stack.Screen name="PublicUserDashboard" component={PublicUserDashboard} />
        <Stack.Screen name="PublicUserMap" options={{headerShown:false}} component={PublicUserMap} />
        <Stack.Screen name="Register"  component={RegisterPage} />
        <Stack.Screen name="Login"  component={LoginPage} />
        <Stack.Screen name="Branch"  component={Branch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
