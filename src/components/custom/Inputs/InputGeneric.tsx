import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {IInputGeneric} from '../types';

export function InputGeneric({
  keyboardType,
  borderColor,
  firstIcon,
  placeholder,
  placeholderTextColor,
  autoCorrect,
  isSecretText,
  inputColor,
  lastIcon,
}: IInputGeneric) {
  return (
    <View
      style={{
        ...styles.contentInputGeneric,
        borderColor: borderColor,
      }}>
      {firstIcon && firstIcon}
      <TextInput
        style={{
          ...styles.contentInput,
          color: inputColor,
          maxWidth:
            firstIcon && lastIcon
              ? '85%'
              : firstIcon || lastIcon
              ? '92%'
              : '100%',
        }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCorrect={autoCorrect}
        secureTextEntry={isSecretText || false}
        keyboardType={keyboardType || 'default'}
        // onChangeText={onChangeText}
        // value={'text'}
      />
      {lastIcon && lastIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  contentInputGeneric: {
    display: 'flex',
    height: '100%',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInput: {
    display: 'flex',
    fontSize: 16.5,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    flexGrow: 1,
    height: '100%',
    padding: 10,
  },
});
