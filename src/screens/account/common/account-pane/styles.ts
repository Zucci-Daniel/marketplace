import {StyleSheet} from 'react-native';
import {pallete} from '../../../../configs/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: pallete.primary,
    padding: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: 'white',
  },
  textContainer: {
    marginLeft: 10,
    alignItems: 'flex-start',
  },
});
