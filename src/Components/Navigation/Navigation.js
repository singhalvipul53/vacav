import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Splash/Splash';
import Login from '../Login/Login';
import LoginOtp from '../Login/LoginOtp';
import Success from '../Login/Success';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        {/* Splash */}
        <Stack.Screen name="splash" component={Splash} />
        {/* Login */}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="loginotp" component={LoginOtp} />
        <Stack.Screen name="success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
