import React from 'react';
import {Image, SafeAreaView, useWindowDimensions} from 'react-native';
import {CustomView} from '../../components/global/commonTag';
import {COLOR} from '../../utils/Colors';

const Splash = ({navigation}) => {
  const {height} = useWindowDimensions();

  setTimeout(() => {
    navigation.navigate('LoginWith');
  }, 3000);
  return (
    <SafeAreaView>
      <CustomView
        className="flex justify-center items-center"
        style={{backgroundColor: COLOR.primary, height: height}}>
        <Image source={require('../../../assets/images/welcome_logo.png')} />
      </CustomView>
    </SafeAreaView>
  );
};

export default Splash;
