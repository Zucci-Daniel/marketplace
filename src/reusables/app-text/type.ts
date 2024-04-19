import {ReactNode} from 'react';
import {FlexAlignType, TextStyle} from 'react-native/types';

export type AppTextTypes = {
  text: string | ReactNode;
  color?: string;
  styles?: TextStyle | Array<TextStyle>;
  numberOfLines?: number;
  cap?: boolean;
  allCaps?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  fontSize?: number;
};
