import React, {FunctionComponent} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {AppText} from '..';
import {appIconButtonStyles} from './styles';
import {SocialButtonTypes} from './type';

const AppIconButton: FunctionComponent<SocialButtonTypes> = ({
  LeftIcon,
  RightIcon,
  style,
  text,
  onPress,
  textColor = 'black',
  bg = 'transparent',
  disabled = false,
  loading = false,
}) => {
  const isDisabled = disabled || loading;
  const styles = appIconButtonStyles({backgroundColor: bg});
  return (
    <TouchableOpacity
      activeOpacity={isDisabled ? 1 : 0.8}
      style={[styles.SocialBtnContainer, style]}
      onPress={isDisabled ? () => null : onPress}>
      {LeftIcon && <LeftIcon width={20} height={20} />}
      {loading ? (
        <ActivityIndicator size={20} color={'white'} />
      ) : (
        <AppText text={text} color={textColor} />
      )}
      {RightIcon && <RightIcon width={20} height={20} />}
    </TouchableOpacity>
  );
};

export default AppIconButton;
