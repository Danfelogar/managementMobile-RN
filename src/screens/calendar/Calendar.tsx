import {useContext} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';
import {Calendar as CalendarComponent} from 'react-native-calendars';

import {useCalendar} from './useCalendar';
import {stylesCalendar} from './stylesCalendar';
import {OTsContext} from '../../context';

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
  // const {dataOTsByMonth} = useContext(OTsContext);
  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    daySelected,
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
            Today
          </Text>
          <Text
            style={{
              ...stylesCalendar.textDateBodyHeader,
              color: textSecondary,
            }}>
            August 24, Tuesday
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
              textDisabledColor: '#d9e1e8',
              dotColor: '#b210a7',
              disabledArrowColor: '#d6c60d',
            }}
            onDayPress={day => {
              console.log('selected day', day);
              changeDaySelected(day.dateString);
            }}
            onMonthChange={month => {
              console.log('month changed', month);
              changeMonthSelected(month.month, month.year);
            }}
            initialDate={daySelected}
            current={daySelected}
          />
        </View>
        <View style={{...stylesCalendar.wrapperTitleBodyText}}>
          <Text style={{...stylesCalendar.textTitleTask, color: textPrimary}}>
            Task
          </Text>
        </View>
        <View style={{...stylesCalendar.wrapperListTask}}>
          <View
            style={{
              ...stylesCalendar.wrapperContentTaskList,
              backgroundColor: card,
            }}>
            <View style={{...stylesCalendar.contentBarTask}}>
              <View
                style={{
                  ...stylesCalendar.barTask,
                  backgroundColor: primary,
                }}
              />
            </View>
            <View style={{...stylesCalendar.contentTextForTask}}>
              <Text
                style={{
                  ...stylesCalendar.textTitleTaskCard,
                  color: textPrimary,
                }}>
                Finish UI Designs
              </Text>
              <Text
                style={{
                  ...stylesCalendar.textDateTaskCard,
                  color: textSecondary,
                }}>
                22/11/2020 10:10 - 24/11/2020 23:11
              </Text>
            </View>
            <View style={{...stylesCalendar.contentIndicatorTask}}>
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{...stylesCalendar.wrapperListTask}}>
          <View
            style={{
              ...stylesCalendar.wrapperContentTaskList,
              backgroundColor: card,
            }}>
            <View style={{...stylesCalendar.contentBarTask}}>
              <View
                style={{
                  ...stylesCalendar.barTask,
                  backgroundColor: primary,
                }}
              />
            </View>
            <View style={{...stylesCalendar.contentTextForTask}}>
              <Text
                style={{
                  ...stylesCalendar.textTitleTaskCard,
                  color: textPrimary,
                }}>
                Finish UI Designs
              </Text>
              <Text
                style={{
                  ...stylesCalendar.textDateTaskCard,
                  color: textSecondary,
                }}>
                22/11/2020 10:10 - 24/11/2020 23:11
              </Text>
            </View>
            <View style={{...stylesCalendar.contentIndicatorTask}}>
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{...stylesCalendar.wrapperListTask}}>
          <View
            style={{
              ...stylesCalendar.wrapperContentTaskList,
              backgroundColor: card,
            }}>
            <View style={{...stylesCalendar.contentBarTask}}>
              <View
                style={{
                  ...stylesCalendar.barTask,
                  backgroundColor: primary,
                }}
              />
            </View>
            <View style={{...stylesCalendar.contentTextForTask}}>
              <Text
                style={{
                  ...stylesCalendar.textTitleTaskCard,
                  color: textPrimary,
                }}>
                Finish UI Designs
              </Text>
              <Text
                style={{
                  ...stylesCalendar.textDateTaskCard,
                  color: textSecondary,
                }}>
                22/11/2020 10:10 - 24/11/2020 23:11
              </Text>
            </View>
            <View style={{...stylesCalendar.contentIndicatorTask}}>
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{...stylesCalendar.wrapperListTask}}>
          <View
            style={{
              ...stylesCalendar.wrapperContentTaskList,
              backgroundColor: card,
            }}>
            <View style={{...stylesCalendar.contentBarTask}}>
              <View
                style={{
                  ...stylesCalendar.barTask,
                  backgroundColor: primary,
                }}
              />
            </View>
            <View style={{...stylesCalendar.contentTextForTask}}>
              <Text
                style={{
                  ...stylesCalendar.textTitleTaskCard,
                  color: textPrimary,
                }}>
                Finish UI Designs
              </Text>
              <Text
                style={{
                  ...stylesCalendar.textDateTaskCard,
                  color: textSecondary,
                }}>
                22/11/2020 10:10 - 24/11/2020 23:11
              </Text>
            </View>
            <View style={{...stylesCalendar.contentIndicatorTask}}>
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
              <View
                style={{
                  ...stylesCalendar.circleTask,
                  backgroundColor: tertiary,
                }}
              />
            </View>
          </View>
        </View>
        <View style={{paddingBottom: 70}} />
      </ScrollView>
    </SafeAreaView>
  );
};
