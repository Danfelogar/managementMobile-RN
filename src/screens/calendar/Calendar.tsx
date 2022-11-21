import {SafeAreaView, ScrollView, Text, View, Platform} from 'react-native';
import 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';
import {Calendar as CalendarComponent} from 'react-native-calendars';

import {useCalendar} from './useCalendar';
import {stylesCalendar} from './stylesCalendar';

export const Calendar = () => {
  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
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
            style={{
              backgroundColor: card,
              marginTop: 10,
              borderRadius: 12,
              height: Platform.OS === 'android' ? 332 : 325,
            }}
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
      </ScrollView>
    </SafeAreaView>
  );
};
