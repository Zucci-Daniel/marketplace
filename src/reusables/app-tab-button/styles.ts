import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const bottomTabStyles = ({
  indicatorColor,
}: {indicatorColor?: string} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      flex: 1,
      paddingBottom: wp(10),
    },
    indicatorContainer: {height: 6, width: '100%'},
    indicator: {
      flex: 1,
      backgroundColor: indicatorColor,
    },
    icon: {marginTop: 10, marginBottom: 8, height: 24},
    iconAndLabelContainer: {alignItems: 'center'},
  });
