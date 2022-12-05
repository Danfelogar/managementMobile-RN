import {useContext} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import 'react-native-gesture-handler';
import {Calendar as CalendarComponent} from 'react-native-calendars';

import {useCalendar} from './useCalendar';
import {stylesCalendar} from './stylesCalendar';
import {OTsContext, UIContext} from '../../context';
import {OTCard} from './OTCard';
import {ModalOT} from '../../components';
import {FormProvider} from 'react-hook-form';

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
  const {dataOTs, isUpdateOT} = useContext(OTsContext);
  const {isOpenOTModal} = useContext(UIContext);
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
    formMethodsCreate,
    formMethodsUpdate,
    changeDaySelected,
    changeMonthSelected,
  } = useCalendar();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: secondary}}>
      <View style={{backgroundColor: secondary}}>
        <View style={{...stylesCalendar.wrapperHeaderText}}>
          <Text style={{...stylesCalendar.textDateTitleHeader}}>Hoy</Text>
          <Text
            style={{
              ...stylesCalendar.textDateBodyHeader,
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
      {isOpenOTModal && isUpdateOT && (
        <FormProvider {...formMethodsUpdate}>
          <ModalOT />
        </FormProvider>
      )}
      {isOpenOTModal && !isUpdateOT && (
        <FormProvider {...formMethodsCreate}>
          <ModalOT />
        </FormProvider>
      )}
    </SafeAreaView>
  );
};
