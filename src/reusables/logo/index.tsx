import React from 'react';
import {View} from 'react-native';
import {AppText} from '..';
import {CartIcon} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import AppRow from '../app-row';
import {styles} from './styles';

const Logo = () => {
  return (
    <AppRow columnGap={2}>
      <View style={styles.container}>
        <CartIcon fill={'white'} />
      </View>
      <AppText fontSize={20} text="Basket" color={pallete.primary} />
    </AppRow>
  );
};

export default Logo;
