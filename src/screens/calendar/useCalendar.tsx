import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import moment from 'moment';

import {AuthContext, OTsContext, ThemeContext} from '../../context';
import {IOT} from './types';

let objDay = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
let objMonth = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
let dayName = new Date().getDay();
let monthName = new Date().getMonth();
let dayNumber = new Date().getDate();

export const useCalendar = () => {
  let today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0];
  let labelToday = `${objMonth[monthName]} ${dayNumber}, ${objDay[dayName]}`;
  const {isLoggedIn} = useContext(AuthContext);
  const {dataOTsByMonth, getOTsDataByMonthQAndYear, getOTsByData} =
    useContext(OTsContext);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [daySelected, setDaySelected] = useState<string>(today);
  const changeDaySelected = (day: string) => {
    setDaySelected(day);
    getOTsByData(day);
  };
  const changeMonthSelected = (month: number, year: number) => {
    getOTsDataByMonthQAndYear(`${year}-${month}`);
  };

  let objOTsByMonth = dataOTsByMonth.reduce((accumulator: {}, value: IOT) => {
    return {
      ...accumulator,
      [moment(value?.fecha_expedicion).format('YYYY-MM-DD')]: {
        marked: true,
      },
    };
  }, {});

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
    objOTsByMonth,
    labelToday,
    //methods
    //functions
    changeDaySelected,
    changeMonthSelected,
  };
};
