import {StyleSheet} from 'react-native';

export const appIconButtonStyles = ({
  backgroundColor,
}: {
  backgroundColor: string;
}) =>
  StyleSheet.create({
    SocialBtnContainer: {
      borderWidth: 1,
      padding: 20,
      paddingVertical: 10,
      borderRadius: 14,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      gap: 10,
    },
  });
