import {SvgProps} from 'react-native-svg';

export interface MenuItemProps {
  text: string;
  onPress?: () => void;
  Icon: React.FC<SvgProps>;
}
