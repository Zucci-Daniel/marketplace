import {StyleSheet} from 'react-native';
import {wp} from '../../../../configs/config';
import {pallete} from '../../../../configs/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: pallete.secondary,
    padding: 10,
    height: wp(50),
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    gap: wp(20),
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 10,
    marginRight: 10,
    color: pallete.black,
  },
});
