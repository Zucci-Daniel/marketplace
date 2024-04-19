import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  BombIcon,
  CheckIcon,
  CloseEyeIcon,
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  OpenEyeIcon,
  UncheckedIcon,
} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {wp} from '../../configs/config';
import {setLoginState, setUser} from '../../redux/loginSlice';
import {AppText} from '../../reusables';
import AppIconButton from '../../reusables/app-icon-button';
import AppRow from '../../reusables/app-row';
import Logo from '../../reusables/logo';
import {styles} from './styles';
import {ButtonProps, CheckboxWithLabelProps, InputFieldProps} from './type';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: email,
        password,
      });
      if (response.data.token) {
        dispatch(setUser(response.data));
        dispatch(setLoginState(true));
        console.log(JSON.stringify(response.data, null, 2), ' user');
        Alert.alert('Login Success', 'WELCOME');
      } else {
        dispatch(setLoginState(false));
      }
    } catch (error) {
      dispatch(setLoginState(false));
      Alert.alert('Login Error', 'FAILED');
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={50} color={pallete.white} />
      </View>
    );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Logo />
        </View>
        <View style={{gap: wp(20), marginBottom: wp(40)}}>
          <AppText fontSize={25} text="Log into your account" />
          <AppText
            text="  Enter your email and password to access your account or create an
        account."
          />
        </View>

        <View style={styles.passwordContainer}>
          <EmailIcon height={24} width={24} fill={pallete.primary} />
          <InputField
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
        <View style={styles.passwordContainer}>
          <BombIcon height={24} width={24} fill={pallete.primary} />
          <InputField
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <OpenEyeIcon height={24} width={24} />
            ) : (
              <CloseEyeIcon height={24} width={24} />
            )}
          </TouchableOpacity>
        </View>

        <CheckboxWithLabel
          value={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
          checked={rememberMe}
          label="Remember me"
        />
        <View style={{gap: wp(30)}}>
          <LoginButton onPress={() => handleLogin()} title="LOGIN" />
          <TouchableOpacity>
            <AppText styles={styles.linkText} text="Forgot password" />
          </TouchableOpacity>

          <AppText styles={styles.orText} text="— Or continue with —" />

          <View style={styles.socialButtons}>
            <AppIconButton
              text="Facebook"
              LeftIcon={FacebookIcon}
              textColor={pallete.black}
            />
            <AppIconButton
              text="Google"
              LeftIcon={GoogleIcon}
              textColor={pallete.black}
            />
          </View>

          <AppRow
            columnGap={5}
            extraStyles={{
              alignSelf: 'center',
            }}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
              <AppText text="Sign up" color={pallete.primary} />
            </TouchableOpacity>
          </AppRow>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={'gray'}
    secureTextEntry={secureTextEntry}
    keyboardType={placeholder === 'Email' ? 'email-address' : 'default'}
  />
);

const LoginButton: React.FC<ButtonProps> = ({onPress, title}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  onPress,
  label,
  checked,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    {checked ? (
      <CheckIcon height={20} width={20} />
    ) : (
      <UncheckedIcon height={20} width={20} />
    )}
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);
