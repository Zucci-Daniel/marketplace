import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from '../app-text';
import {styles} from './styles';
import {AppButtonTypes} from './type';
import {pallete} from '../../configs/Colors';

const AppButton = ({
  isCentered = true,
  onPress,
  disabled = false,
  style,
  type = 'normal',
  text,
}: AppButtonTypes) => {
  const Container = ({children}: {children: ReactNode}) => {
    return disabled ? (
      <View pointerEvents={disabled ? 'none' : 'auto'}>{children}</View>
    ) : (
      <>{children}</>
    );
  };

  return (
    <Container>
      <>
        <TouchableOpacity
          activeOpacity={disabled ? 1 : 0.7}
          onPress={onPress}
          style={[
            styles(type, pallete, isCentered, disabled).container,
            style,
          ]}>
          <AppText text={text} color="white" />
        </TouchableOpacity>
      </>
    </Container>
  );
};

export default AppButton;
