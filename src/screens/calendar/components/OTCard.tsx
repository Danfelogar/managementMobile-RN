import moment from 'moment';
import React, {useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

import {stylesCalendar} from '../stylesCalendar';
import {IOT} from '../types';
import {useCalendar} from '../useCalendar';

interface Props {
  item: IOT;
  changeModalUpdate: (ot_id: number) => void;
}

enum objStateColor {
  pendiente = '#d62828',
  en_proceso = '#ffc300',
  finalizada = '#55a630',
}

export const OTCard = ({item, changeModalUpdate}: Props) => {
  const {
    textPrimary,
    textSecondary,

    tertiary,
    card,
  } = useCalendar();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View style={{...stylesCalendar.wrapperListTask}}>
      <Animated.View style={{opacity: fadeAnim}}>
        <TouchableOpacity
          style={{
            ...stylesCalendar.wrapperContentTaskList,
            backgroundColor: card,
          }}
          activeOpacity={0.87}
          onPress={() => changeModalUpdate(item.ot_id)}>
          <View style={{...stylesCalendar.contentBarTask}}>
            <View
              style={{
                ...stylesCalendar.barTask,
                backgroundColor: objStateColor[`${item.estado_de_OT}`],
              }}
            />
          </View>
          <View style={{...stylesCalendar.contentTextForTask}}>
            <Text
              style={{
                ...stylesCalendar.textTitleTaskCard,
                color: textPrimary,
              }}>
              {item?.slug}
            </Text>
            <Text
              style={{
                ...stylesCalendar.textDateTaskCard,
                color: textSecondary,
              }}>
              {`${moment(item.fecha_expedicion).format(
                'YYYY/MM/DD',
              )} - ${moment(item.fecha_cierre).format('YYYY/MM/DD')}  ${
                item.tiempoDeEjecucion
              } H`}
            </Text>
          </View>
          <View style={{...stylesCalendar.contentIndicatorTask}}>
            {item?.tiempoDeEjecucion &&
              Number(item?.tiempoDeEjecucion) > 0 &&
              Number(item?.tiempoDeEjecucion) <= 5 &&
              [0].map((_, idx) => (
                <View
                  key={idx}
                  style={{
                    ...stylesCalendar.circleTask,
                    backgroundColor: tertiary,
                  }}
                />
              ))}
            {item?.tiempoDeEjecucion &&
              Number(item?.tiempoDeEjecucion) > 5 &&
              Number(item?.tiempoDeEjecucion) <= 11 &&
              [0, 1].map((_, idx) => (
                <View
                  key={idx}
                  style={{
                    ...stylesCalendar.circleTask,
                    backgroundColor: tertiary,
                  }}
                />
              ))}
            {item?.tiempoDeEjecucion &&
              Number(item?.tiempoDeEjecucion) >= 12 &&
              [0, 1, 2].map((_, idx) => (
                <View
                  key={idx}
                  style={{
                    ...stylesCalendar.circleTask,
                    backgroundColor: tertiary,
                  }}
                />
              ))}
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
