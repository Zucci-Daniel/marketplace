import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../reusables';
import {styles} from './styles';

const Saved = () => {
  return (
    <View style={styles.container}>
      <AppText text="Saved" />
    </View>
  );
};

export default Saved;
