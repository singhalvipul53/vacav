import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../utils/Fonts';

const CustomButton = ({
  buttonFunction,
  text,
  bgColor,
  textColor,
  fontSize,
  borderColor,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={buttonFunction}
      style={{
        borderWidth: 1,
        borderColor: borderColor ? borderColor : 'rgba(0,0,0,0)',
        backgroundColor: bgColor,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        textAlign: 'center',
      }}>
      <Text
        style={{
          fontSize: fontSize,
          color: textColor,
          textAlign: 'center',
          fontFamily: Fonts.robotoslabbold,
        }}>
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
