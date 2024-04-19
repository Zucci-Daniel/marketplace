import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../reusables';
import {styles} from './styles';

const Cart = () => {
  return (
    <View style={styles.container}>
      <AppText text="Cart" />
    </View>
  );
};

export default Cart;
