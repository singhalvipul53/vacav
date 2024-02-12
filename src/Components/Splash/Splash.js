import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import CustomButton from '../Custom/CustomButton';
import Colors from '../../utils/Colors';

const Splash = ({navigation}) => {
  let insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.logocontainer}>
        <Image source={require('../../assets/logo.png')} resizeMode="contain" />
      </View>
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>
          Make the world a safer place for kids
        </Text>
      </View>
      <View style={styles.headingcontainer}>
        <Image
          source={require('../../assets/splashcar.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headingcontainer}>
        <Text style={styles.signuptext}>Early Sign Up</Text>
      </View>
      <View style={styles.headingcontainer}>
        <Text style={styles.freetext}>
          <Text style={styles.subfreetext}>6 Months</Text> free for first
        </Text>
        <Text style={styles.freetext}>1000 users!</Text>
      </View>
      <View style={[styles.buttoncontainer, {bottom: 40 + insets['bottom']}]}>
        <CustomButton
          text={'Get Started'}
          bgColor={Colors.bgcolor}
          textColor={Colors.white}
          fontSize={21}
          buttonFunction={() => navigation.navigate('login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
