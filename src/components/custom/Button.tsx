import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {IButton} from './types';

export const Button = ({
  buttonStyle,
  activeOpacity,
  onPress,
  firstIcon,
  textContent,
  lastIcon,
  isLoading = false,
}: IButton) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={activeOpacity || 0.5}
      onPress={onPress}
      style={{...buttonStyle}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#ff8600" />
      ) : (
        <>
          {firstIcon && firstIcon}
          {textContent && textContent}
          {lastIcon && lastIcon}
        </>
      )}
    </TouchableOpacity>
  );
};
