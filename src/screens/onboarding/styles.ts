import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const onboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2D3D',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    gap: wp(30),
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'normal',
  },
  headerTextBold: {
    color: '#FFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#FFFFFF',
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
    width: 200, // Adjust based on your image aspect ratio
    height: 300, // Adjust based on your image aspect ratio
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
