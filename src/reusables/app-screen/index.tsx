import React, {Fragment, FunctionComponent} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {isIOS, wp} from '../../configs/config';
import {appScreenStyles} from './styles';
import {AppScreenProps} from './type';


/**
 * @param isScrollable defaults to true
 * @param disableSafeArea defaults to false
 */
const AppScreen: FunctionComponent<AppScreenProps> = ({
  children,
  isScrollable = true,
  disableSafeArea = false,
  ScreenHeader,
  scrollRef,
  paddingHorizontal,
  ...scrollViewProps
}) => {
  const Container = disableSafeArea ? View : SafeAreaView;
  const styles = appScreenStyles();
  const horizontalPadding = wp(paddingHorizontal ?? 0);

  return (
    <Fragment>
      <StatusBar backgroundColor={'green'} barStyle="dark-content" />
      <Container style={[styles.flex1]}>
        <View
          style={[
            styles.flex1,
            // eslint-disable-next-line react-native/no-inline-styles
            {overflow: 'hidden'},
          ]}>
          {ScreenHeader}
          <KeyboardAvoidingView
            behavior={isIOS ? 'padding' : 'height'}
            style={[styles.flex1]}>
            {isScrollable ? (
              <ScrollView
                ref={scrollRef}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                style={[
                  {paddingHorizontal: horizontalPadding},
                  scrollViewProps.contentContainerStyle,
                ]}
                {...scrollViewProps}>
                {children}
              </ScrollView>
            ) : (
              <>
                {
                  <View
                    style={[
                      styles.flex1,
                      {paddingHorizontal: horizontalPadding},
                      scrollViewProps.contentContainerStyle,
                    ]}>
                    {children}
                  </View>
                }
              </>
            )}
          </KeyboardAvoidingView>
        </View>
      </Container>
    </Fragment>
  );
};

export default AppScreen;
