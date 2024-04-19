import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {CloseIcon} from '../../assets/svg';
import {fs} from '../../configs/config';
import AppRow from '../app-row';
import AppText from '../app-text';
import {styles} from './styles';

const AppHeader = ({
  leftContent,
  middleContent,
  rightContent,
  middleTitle = 'Locker service',
  backgroundColor = 'green',
  titleColor = 'white',
}: {
  rightContent?: ReactNode;
  leftContent: ReactNode;
  middleContent?: ReactNode;
  middleTitle?: string;
  leftTitle?: string;
  righteTitle?: string;
  backgroundColor?: string;
  titleColor?: string;
}) => {
  return (
    <View style={[styles.headerContainer, {backgroundColor}]}>
      <AppRow>
        <View style={{flex: 0.7}}>{leftContent}</View>
        {middleContent || (
          <AppText text={middleTitle} color={titleColor} fontSize={fs(20)} />
        )}
        {rightContent || (
          <CloseIcon height={30} width={30} fill={'white'} style={{flex: 1}} />
        )}
      </AppRow>
    </View>
  );
};

export default AppHeader;
