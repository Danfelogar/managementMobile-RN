import React, {useContext, useState} from 'react';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {StyleSheet, Text, View, Platform} from 'react-native';
import moment from 'moment';

import {Button} from '../Button';
import {ThemeContext} from '../../../context';
import {IDataPicker} from '../types';
import {Controller} from 'react-hook-form';

export const InputDataPicker = ({widthBtn, name, control}: IDataPicker) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({
        field: {onChange, value = new Date() as Date},
        formState: {errors},
      }) => {
        return (
          <>
            <View>
              <Text
                style={{
                  ...styles.titleOfDataBtn,
                  textAlign: 'left',
                  color: colors.textPrimary,
                }}>
                {value && `${moment(value).format('YYYY-MM-DD')}`}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Button
                isLoading={false}
                buttonStyle={{
                  ...styles.btnChangeDate,
                  backgroundColor: colors.primary,
                  width: widthBtn,
                  marginBottom: Platform.OS === 'ios' && showDatePicker ? 7 : 0,
                }}
                activeOpacity={0.9}
                onPress={() => setShowDatePicker(!showDatePicker)}
                textContent={
                  <Text
                    style={{
                      ...styles.titleOfDataBtn,
                      color: colors.background,
                    }}>
                    {showDatePicker ? 'Ocultar' : 'Mostrar'} Calendario
                  </Text>
                }
              />
              {showDatePicker && (
                <RNDateTimePicker
                  value={typeof value === 'object' ? value : new Date(value)}
                  testID="dataTimePicker"
                  mode="date"
                  display="default"
                  is24Hour={true}
                  onChange={(
                    _: DateTimePickerEvent,
                    date: Date | undefined,
                  ) => {
                    // console.log({date});
                    setShowDatePicker(!showDatePicker);
                    onChange(date);
                  }}
                />
              )}
              {!!errors[name] && (
                <Text style={styles.helperText}>
                  {errors[name]?.message as string}
                </Text>
              )}
            </View>
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  btnChangeDate: {
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 35,
  },
  titleOfDataBtn: {
    fontSize: 18.5,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    marginLeft: 8.9,
  },
  helperText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15.2,
    paddingLeft: 10,
    // fontWeight: '400',
    color: '#ff4d4f',
  },
});
