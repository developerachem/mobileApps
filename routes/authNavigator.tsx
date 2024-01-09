import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginWith from '../src/screens/loginWith/LoginWith';
import Splash from '../src/screens/splash/Splash';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginWith" component={LoginWith} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
