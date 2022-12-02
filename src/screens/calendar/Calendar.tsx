import {useContext} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';
import {Calendar as CalendarComponent} from 'react-native-calendars';

import {useCalendar} from './useCalendar';
import {stylesCalendar} from './stylesCalendar';
import {OTsContext} from '../../context';
import {OTCard} from './OTCard';

LocaleConfig.locales.fr = {
  monthNames: [
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
  ],
  monthNamesShort: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.',
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sab.'],
  today: 'Este Dia',
};
LocaleConfig.defaultLocale = 'fr';
export const Calendar = () => {
  const {dataOTs} = useContext(OTsContext);
  const {
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
    changeDaySelected,
    changeMonthSelected,
  } = useCalendar();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: secondary}}>
      <View style={{backgroundColor: secondary}}>
        <View style={{...stylesCalendar.wrapperHeaderIcon}}>
          <IconFeather
            name="search"
            style={{marginHorizontal: 12}}
            size={28}
            color={textPrimary}
          />
          <IconFeather name="bell" size={28} color={textPrimary} />
        </View>
        <View style={{...stylesCalendar.wrapperHeaderText}}>
          <Text
            style={{...stylesCalendar.textDateTitleHeader, color: textPrimary}}>
            Hoy
          </Text>
          <Text
            style={{
              ...stylesCalendar.textDateBodyHeader,
              color: textSecondary,
            }}>
            {labelToday}
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: background,
          paddingHorizontal: 20,
        }}>
        <View style={{marginTop: 10}}>
          <CalendarComponent
            style={{...stylesCalendar.calendarComponent}}
            theme={{
              backgroundColor: card,
              calendarBackground: card,
              textSectionTitleColor: textSecondary,
              selectedDayBackgroundColor: primary,
              dayTextColor: textSecondary,
              selectedDotColor: background,
              arrowColor: primary,
              monthTextColor: textPrimary,
              indicatorColor: textPrimary,
              todayTextColor: primary,
              textSectionTitleDisabledColor: '#412f79',
              selectedDayTextColor: '#644040',
              textDisabledColor: textSecondary,
              dotColor: tertiary,
              disabledArrowColor: '#d6c60d',
            }}
            markedDates={objOTsByMonth || undefined}
            onDayPress={day => {
              // console.log('selected day', day);
              changeDaySelected(day.dateString);
            }}
            onMonthChange={month => {
              // console.log('month changed', month);
              changeMonthSelected(month.month, month.year);
            }}
            initialDate={daySelected}
            current={daySelected}
          />
        </View>
        <View style={{...stylesCalendar.wrapperTitleBodyText}}>
          <Text style={{...stylesCalendar.textTitleTask, color: textPrimary}}>
            OTs
          </Text>
        </View>
        {dataOTs.length === 0 && (
          <Text style={{...stylesCalendar.textVoidTask, color: textSecondary}}>
            No se ha encontrado ninguna OT en el dia: '{daySelected}'
          </Text>
        )}
        {dataOTs &&
          dataOTs.map((item, idx) => <OTCard key={idx} item={item} />)}
        <View style={{paddingBottom: 70}} />
      </ScrollView>
    </SafeAreaView>
  );
};
