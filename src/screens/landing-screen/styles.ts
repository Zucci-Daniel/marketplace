import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';
import {pallete} from '../../configs/Colors';

export const onboardingStyle = StyleSheet.create({
  bg: {
    gap: 20,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E2D3D',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: wp(50),
  },
  headerContainer: {
    alignItems: 'center',
    gap: wp(30),
  },
  headerText: {
    color: pallete.white,
    fontSize: 24,
    fontWeight: 'normal',
  },
  headerTextBold: {
    color: '#FFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: pallete.white,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: pallete.primary,
    padding: 15,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: pallete.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  roundLogo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: pallete.primary,
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(10),
  },
});
