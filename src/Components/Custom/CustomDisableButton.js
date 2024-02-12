import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomDisableButton = ({
  isEnabled,
  buttonFunction,
  text,
  bgColor,
  textColor,
  borderColor,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      onPress={isEnabled ? onPress : null}
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        elevation: 8,
        backgroundColor: bgColor,
        borderRadius: 10,
        padding: 15,
        textAlign: 'center',
      }}>
      <Text
        style={{
          fontSize: fontSize,
          color: textColor,
          textAlign: 'center',
          letterSpacing: 0.9,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomDisableButton;
