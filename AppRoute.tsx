import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';
import AuthNavigator from './routes/authNavigator';

const AppRoute = () => {
  return (
    <>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default AppRoute;
