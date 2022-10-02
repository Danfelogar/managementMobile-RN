import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {IInputGeneric} from '../types';
import {Controller} from 'react-hook-form';

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
  name,
  control,
}: IInputGeneric) {
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        return (
          <View style={styles.WrapperStandard}>
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
                onChangeText={onChange}
                value={value}
              />
              {lastIcon && lastIcon}
            </View>
            {!!errors[name] && (
              <Text style={styles.helperText}>
                {errors[name]?.message as string}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  WrapperStandard: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'orange',
  },
  contentInputGeneric: {
    display: 'flex',
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
  helperText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15.2,
    paddingLeft: 10,
    // fontWeight: '400',
    color: '#ff4d4f',
  },
});
