import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {bottomTabStyles} from './styles';
import {TabButtonProps} from './type';

const AppTabButton: FunctionComponent<TabButtonProps> = ({icon, color}) => {
  const styles = bottomTabStyles({
    indicatorColor: color,
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconAndLabelContainer}>
        <View style={styles.icon}>{icon}</View>
      </View>
    </View>
  );
};

export default AppTabButton;
