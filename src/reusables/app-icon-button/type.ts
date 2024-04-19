import {ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type SocialButtonTypes = {
  text: string;
  RightIcon?: React.FC<SvgProps>;
  LeftIcon?: React.FC<SvgProps>;
  style?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  textColor?: string;
  bg?: string;
};
