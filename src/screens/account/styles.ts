import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';
import {pallete} from '../../configs/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallete.white,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: wp(40),
    width: 200,
  },
  content: {
    flex: 1,
    width: '90%',
    backgroundColor: pallete.white,
    marginTop: -100,
    alignSelf: 'center',
    paddingVertical: wp(40),
    alignItems: 'center',
    borderRadius: 10,
  },
  profileHeader: {
    height: 200,
    width: '100%',
    backgroundColor: pallete.primary,
    padding: wp(20),
    position: 'relative',
  },
  vShape: {
    height: 50,
    width: '100%',
    backgroundColor: pallete.white,
    borderRadius: 20,
    marginTop: -20,
  },
});
