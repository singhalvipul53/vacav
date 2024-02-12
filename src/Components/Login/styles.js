import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Colors.white,
    position: 'relative',
  },
  logocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
    zIndex: 10,
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    fontFamily: Fonts.robotoslabmedium,
    color: Colors.textcolor,
  },
  sublabel: {
    fontSize: 12,
    fontFamily: Fonts.robotoslabextralight,
    color: Colors.textcolor,
  },
  textinput: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: Colors.textinputborder,
    marginVertical: 10,
  },

  buttoncontainer: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
  },
  verifyheading: {
    fontSize: 25,
    fontFamily: Fonts.robotoslabmedium,
    color: Colors.bgcolor,
    textAlign: 'center',
  },
  otpcommontext: {
    fontSize: 14,
    fontFamily: Fonts.robotoslablight,
    textAlign: 'center',
    color: Colors.otptext,
  },
  resendcontainer: {
    borderBottomColor: Colors.bgcolor,
    borderBottomWidth: 1,
    width: 110,
    alignItems: 'center',
  },
  resendtext: {
    fontSize: 16,
    fontFamily: Fonts.robotoslabregular,
    color: Colors.bgcolor,
    marginTop: 15,
  },
  phonefieldcontainer: {
    flexDirection: 'row',
    borderColor: Colors.textinputborder,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  phonetextinput: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 0.85,
  },
  phonenumber: {
    fontFamily: Fonts.poppinsregular,
    color: Colors.subotptext,
  },
  otpcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  otptextinput: {
    borderWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 5,
    width: Dimensions.get('screen').width / 4 - 20,
    height: 70,
  },
  video: {
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  congratulatecontainer: {
    backgroundColor: Colors.bgcolor,
    padding: 20,
    borderRadius: 5,
  },
  congratulatetext: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: Fonts.robotoslabblack,
    lineHeight: 30,
    textAlign: 'center',
  },
});
