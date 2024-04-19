import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {BasketIcon} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {fs, wp} from '../../configs/config';
import {setSkipOnboardingState} from '../../redux/loginSlice';
import {AppText} from '../../reusables';
import AppRow from '../../reusables/app-row';
import {routes} from '../../routers/router-constants/routes';
import {onboardingStyle} from './styles';

const LandingScreen = ({navigation}: GlobalScreenTypes) => {
  const dispatch = useDispatch();
  return (
    <ImageBackground
      src="https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg"
      style={onboardingStyle.container}>
      <View style={onboardingStyle.bg}>
        <RoundLogo />
        <AppText
          fontSize={fs(20)}
          text="Start Shopping"
          color={pallete.white}
        />
        <AppText fontSize={fs(20)} text="Stay Happy" color={pallete.white} />
        <AppText fontSize={fs(20)} text="Anytime" color={pallete.white} />
      </View>
      <View style={{gap: wp(20)}}>
        <AppText
          text="Basket online marketplace"
          fontSize={fs(20)}
          color={pallete.primary}
        />
        <AppRow extraStyles={{width: '90%', alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={() => dispatch(setSkipOnboardingState(true))}>
            <AppText text="Skip" color={pallete.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.ONBOARDING)}>
            <AppText text="Next" color={pallete.primary} />
          </TouchableOpacity>
        </AppRow>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;

const RoundLogo = () => {
  return (
    <View style={onboardingStyle.roundLogo}>
      <BasketIcon fill={pallete.white} width={24} height={24} />
      <AppText fontSize={fs(20)} text="Basket" color={pallete.white} />
    </View>
  );
};
