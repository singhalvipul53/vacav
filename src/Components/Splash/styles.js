import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    position: 'relative',
  },
  logocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  headingcontainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: Fonts.robotoslabbold,
    textAlign: 'center',
    lineHeight: 30,
  },
  signuptext: {
    fontSize: 20,
    fontFamily: Fonts.robotoslabbold,
    color: Colors.bgcolor,
  },
  buttoncontainer: {
    width: '100%',
    position: 'absolute',
  },
  freetext: {
    fontSize: 16,
    fontFamily: Fonts.robotoslablight,
    textAlign: 'center',
  },
  subfreetext: {
    fontSize: 18,
    fontFamily: Fonts.robotoslabextrabold,
    textAlign: 'center',
  },
});
