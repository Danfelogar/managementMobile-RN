import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';

import {AuthContext, OTsContext, ThemeContext} from '../../context';

export const useCalendar = () => {
  let today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0];

  const {isLoggedIn} = useContext(AuthContext);
  const {dataOTsByMonth} = useContext(OTsContext);
  const [daySelected, setDaySelected] = useState<string>(today);
  const [monthSelected, setMonthSelected] = useState<string>();
  const changeDaySelected = (day: string) => {
    setDaySelected(day);
  };
  const changeMonthSelected = (month: number, year: number) => {
    setMonthSelected(`${year}-${month}`);
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
  } = colors;

  const navigation = useNavigation<any>();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return {
    //state
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    daySelected,
    monthSelected,
    //methods
    //functions
    changeDaySelected,
    changeMonthSelected,
  };
};
