//Button

import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleProp,
} from 'react-native';

export interface IButton {
  buttonStyle: StyleProp<any>;
  activeOpacity?: number;
  onPress: (event: GestureResponderEvent) => void;
  firstIcon?: ReactNode;
  textContent?: ReactNode;
  lastIcon?: ReactNode;
  isLoading?: boolean;
}

export interface IInputGeneric {
  borderColor: string;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  //control
  name: string;
  control: any;
}

export interface IInputSelect {
  borderColor: string;
  itemArr?: Array<{value: string; label: string}>;
  placeholder: string;
  placeholderTextColor: string;
  colorValueSelected: string;

  //control
  name: string;
  control: any;
}
