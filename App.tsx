import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {pallete} from './src/configs/Colors';
import {useIgnore} from './src/hooks/useIgnore';
import NavigationProvider from './src/routers/navigation';

const App = () => {
  const _ = useIgnore();

  return (
    <>
      <StatusBar backgroundColor={pallete.secondary} barStyle="light-content" />
      <SafeAreaView
        style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationProvider />
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
};

export default App;
