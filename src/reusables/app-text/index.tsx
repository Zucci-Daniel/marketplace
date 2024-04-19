import React from 'react';
import {Text} from 'react-native';
import {AppTextTypes} from './type';

const AppText = ({
  text = 'text',
  color = 'black',
  styles,
  numberOfLines = 3,
  cap = false,
  allCaps = false,
  fontSize,
  textAlign = 'center',
}: AppTextTypes) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          textTransform: cap ? 'capitalize' : allCaps ? 'uppercase' : 'none',
          color,
          fontSize,
          textAlign: textAlign,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default AppText;
