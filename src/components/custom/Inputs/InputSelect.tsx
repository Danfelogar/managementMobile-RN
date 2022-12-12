import React from 'react';
import {Controller} from 'react-hook-form';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {IInputSelect} from '../types';
import RNPickerSelect from 'react-native-picker-select';
import {width} from '../../../helpers';
width;
let dummy = [{label: 'Esperando data...', value: null}];

const Triangle = ({colorIcon}: {colorIcon: string}) => {
  return <View style={{...styles.triangle, borderBottomColor: colorIcon}} />;
};

export const InputSelect = ({
  borderColor,
  colorValueSelected,
  placeholder,
  placeholderTextColor,
  itemArr,
  name,
  control,
}: IInputSelect) => {
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
              <RNPickerSelect
                fixAndroidTouchableBug={true}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: placeholder,
                  value: null,
                  color: placeholderTextColor,
                }}
                style={{
                  inputIOS: {
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    width: width / 1.147,
                    borderColor: 'transparent',
                    borderRadius: 4,
                    color: colorValueSelected,
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                  inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    width: width / 1.147,
                    borderColor: 'transparent',
                    borderRadius: 8,
                    color: colorValueSelected,
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                  iconContainer: {
                    top: Platform.OS === 'ios' ? 18 : 17,
                    right: 10,
                  },
                }}
                onValueChange={onChange}
                value={typeof value === 'number' ? value.toString() : value}
                items={itemArr || dummy}
                // textInputProps={{ underlineColorAndroid: 'cyan' }}
                Icon={() => {
                  return <Triangle colorIcon={borderColor} />;
                }}
              />
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
};

const styles = StyleSheet.create({
  WrapperStandard: {
    display: 'flex',
    flexDirection: 'column',
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
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
  helperText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15.2,
    paddingLeft: 10,
    // fontWeight: '400',
    color: '#ff4d4f',
  },
});
