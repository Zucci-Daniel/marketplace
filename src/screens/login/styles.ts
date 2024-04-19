import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';
import {wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  wrapper: {width: '20%', alignSelf: 'center', marginBottom: wp(50)},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 45, 61, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderBottomColor: 'gray',
    padding: 10,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: pallete.primary,
    marginBottom: 15,
  },
  icon: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    gap: wp(20),
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  button: {
    backgroundColor: pallete.secondary,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: pallete.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: pallete.primary,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  orText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
  },
  socialButton: {
    backgroundColor: pallete.white,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
