export interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}
export interface ButtonProps {
  onPress: () => void;
  title: string;
}

export interface SocialButtonProps {
  platform: string;
}

export interface CheckboxWithLabelProps {
  value: boolean;
  onPress: () => void;
  label: string;
  checked: boolean;
}
