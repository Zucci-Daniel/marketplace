import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ArrowIcon, HumanSvg} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {fs, wp} from '../../configs/config';
import {setSkipOnboardingState} from '../../redux/loginSlice';
import {AppText} from '../../reusables';
import AppIconButton from '../../reusables/app-icon-button';
import Logo from '../../reusables/logo';
import {onboardingStyle} from './styles';

const Onboarding = () => {
  const dispatch = useDispatch();

  const setOnboardingCompleted = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      dispatch(setSkipOnboardingState(true));
    } catch (error) {
      console.error('Error setting onboarding status:', error);
    }
  };

  return (
    <View style={onboardingStyle.container}>
      <View style={onboardingStyle.headerContainer}>
        <Logo />
        <Text style={onboardingStyle.headerText}>Welcome to</Text>
        <View
          style={{justifyContent: 'center', alignItems: 'center', gap: wp(10)}}>
          <AppText
            fontSize={30}
            text="basket online store"
            color={pallete.white}
          />
          <AppText
            fontSize={fs(14)}
            styles={{textAlign: 'center', paddingHorizontal: wp(40)}}
            text="basket is the no1 online store for both new and used products."
            color={pallete.white}
          />
        </View>
      </View>
      <View style={onboardingStyle.imageContainer}>
        <HumanSvg height={200} width={200} />
      </View>
      <AppIconButton
        onPress={setOnboardingCompleted}
        text="GET STARTED"
        RightIcon={ArrowIcon}
        bg={pallete.primary}
        textColor={pallete.white}
        style={{paddingHorizontal: wp(90), marginBottom: wp(100)}}
      />
    </View>
  );
};

export default Onboarding;
