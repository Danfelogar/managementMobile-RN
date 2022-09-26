import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IButton} from './types';

export const Button = ({
  buttonStyle,
  activeOpacity,
  onPress,
  firstIcon,
  textContent,
  lastIcon,
}: IButton) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.5}
      onPress={onPress}
      style={{...buttonStyle}}>
      {firstIcon && firstIcon}
      {textContent && textContent}
      {lastIcon && lastIcon}
    </TouchableOpacity>
  );
};
