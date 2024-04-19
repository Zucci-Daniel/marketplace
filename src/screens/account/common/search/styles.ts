import {StyleSheet} from 'react-native';
import {wp} from '../../../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E2D3D',
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
    color: '#FFFFFF',
  },
});
