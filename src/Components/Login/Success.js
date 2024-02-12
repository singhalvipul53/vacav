import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import Video from 'react-native-video';

const Success = () => {
  let insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={[styles.logocontainer, {marginBottom: 0}]}>
        <Image source={require('../../assets/logo.png')} resizeMode="contain" />
      </View>
      <Video
        source={require('../../assets/backgroundvideo.mp4')}
        style={styles.video}
        resizeMode="stretch"
        repeat={false}
      />
      <View style={[styles.buttoncontainer, {bottom: 20 + insets['bottom']}]}>
        <View style={styles.congratulatecontainer}>
          <Text style={styles.congratulatetext}>Congratulations !!!</Text>
          <Text style={styles.congratulatetext}>
            You are signed up. We will notify you once we are in your location
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;
