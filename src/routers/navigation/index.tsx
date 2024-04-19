import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AccountIcon, CartIcon, HomeIcon, StarIcon} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {selectSkipOnboardingState} from '../../redux/loginSlice';
import {RootState} from '../../redux/store';
import AppTabButton from '../../reusables/app-tab-button';
import {
  Account,
  Cart,
  Home,
  LandingScreen,
  LoginScreen,
  Onboarding,
  Saved,
} from '../../screens';
import {routes} from '../router-constants/routes';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  const skipOnboarding = useSelector(selectSkipOnboardingState);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const onboardingCompleted = await AsyncStorage.getItem(
          'onboardingCompleted',
        );
        if (onboardingCompleted) {
          setShowOnboarding(false);
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      }
    };

    checkOnboardingStatus();
  }, []);

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {showOnboarding && !skipOnboarding && (
        <>
          <AuthStack.Screen
            name={routes.LANDING_SCREEN}
            component={LandingScreen}
          />
          <AuthStack.Screen name={routes.ONBOARDING} component={Onboarding} />
        </>
      )}
      <AuthStack.Screen name={routes.LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: pallete.primary,
        tabBarInactiveTintColor: pallete.black,
        headerShown: false,
      }}
      initialRouteName={routes.ACCOUNT}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<HomeIcon height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SAVED}
        component={Saved}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<StarIcon height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={Account}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<AccountIcon height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CART}
        component={Cart}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<CartIcon height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function NavigationProvider() {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default NavigationProvider;
