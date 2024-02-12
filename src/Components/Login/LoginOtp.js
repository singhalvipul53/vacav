import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import CustomButton from '../Custom/CustomButton';
import Colors from '../../utils/Colors';
import OTPTextInput from 'react-native-otp-textinput';

const LoginOtp = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [otp, setotp] = useState('');

  const handlenext = () => {
    if (otp.length !== 4) return;
    navigation.navigate('success');
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.logocontainer}>
        <Image source={require('../../assets/logo.png')} resizeMode="contain" />
      </View>
      <View style={styles.container}>
        <Text style={styles.verifyheading}>Verify Account</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.otpcommontext}>
          Enter 4 digit code we have sent
        </Text>
        <Text style={styles.otpcommontext}>
          to <Text style={styles.phonenumber}>xxxxxxx748</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.otpcontainer}>
          <OTPTextInput
            inputCount={4}
            textInputStyle={styles.otptextinput}
            tintColor={'#000'}
            handleTextChange={val => setotp(val)}
            autoFocusOnLoad={false}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.otpcommontext}>
          Haven’t received verification code?
        </Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.resendcontainer}>
            <Text style={styles.resendtext}>Resend Code</Text>
          </View>
        </View>
      </View>
      <View style={[styles.buttoncontainer, {bottom: 20 + insets['bottom']}]}>
        <CustomButton
          text={'Verify Now'}
          bgColor={otp.length !== 4 ? Colors.disablebg : Colors.bgcolor}
          textColor={Colors.white}
          fontSize={21}
          disabled={otp.length !== 4}
          buttonFunction={handlenext}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginOtp;
