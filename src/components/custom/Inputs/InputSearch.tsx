import React, {ReactNode} from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';

interface Props {
  borderColor: string;
  backgroundColor: string;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect?: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  value?: string;
  onChange: () => void;
}

export const InputSearch = ({
  keyboardType,
  borderColor,
  backgroundColor,
  firstIcon,
  placeholder,
  placeholderTextColor,
  autoCorrect,
  //   isSecretText,
  inputColor,
  lastIcon,
  value,
  onChange,
}: Props) => {
  return (
    <View style={styles.WrapperStandard}>
      <View
        style={{
          ...styles.contentInputGeneric,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
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
          //   secureTextEntry={isSecretText || false}
          keyboardType={keyboardType || 'default'}
          onChangeText={onChange}
          value={value || undefined}
        />
        {lastIcon && lastIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  WrapperStandard: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'orange',
  },
  contentInputGeneric: {
    display: 'flex',
    borderRadius: 100,
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
