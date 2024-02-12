import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import CustomButton from '../Custom/CustomButton';
import Colors from '../../utils/Colors';
import CountryPicker from 'rn-country-picker';

const Login = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.logocontainer}>
        <Image source={require('../../assets/logo.png')} resizeMode="contain" />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Enter your Mobile Number</Text>
        <View style={styles.phonefieldcontainer}>
          <CountryPicker
            containerStyle={{
              flex: 0.15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            dropDownImage={require('../../assets/dropdown.png')}
            disable={false}
            animationType={'slide'}
            pickerTitle={'Country Picker'}
            searchBarPlaceHolder={'Search......'}
            hideCountryFlag={true}
            hideCountryCode={false}
          />
          <TextInput style={styles.phonetextinput} />
        </View>
        <Text style={styles.sublabel}>
          We’ll send an OTP for the verification of your number
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Enter Pincode</Text>
        <TextInput style={styles.textinput} />
      </View>
      <View style={[styles.buttoncontainer, {bottom: 20 + insets['bottom']}]}>
        <CustomButton
          text={'Continue'}
          bgColor={Colors.bgcolor}
          textColor={Colors.white}
          fontSize={21}
          buttonFunction={() => navigation.navigate('loginotp')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
