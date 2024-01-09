import {withExpoSnack} from 'nativewind';
import React from 'react';
import 'react-native-gesture-handler';
import AppRoute from './AppRoute';

function App(): JSX.Element {
  return <AppRoute />;
}

export default withExpoSnack(App);
