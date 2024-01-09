import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import {
  CustomButton,
  CustomText,
  CustomView,
} from '../../components/global/commonTag';
import {COLOR} from '../../utils/Colors';

const LoginWith = () => {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/images/login_page_image.png')}
        style={{width: width, height: height}}>
        {/* Skip Button */}
        <CustomButton
          className="absolute top-4 right-4 py-2 px-4 rounded-full shadow text-sm"
          style={{backgroundColor: COLOR.white}}>
          <CustomText style={{color: COLOR.primary}}>Skip</CustomText>
        </CustomButton>

        {/* Welcome Text */}
        <CustomView className="justify-center items-center h-screen">
          <Text style={styles.text}>Welcome to</Text>
        </CustomView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginWith;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});
