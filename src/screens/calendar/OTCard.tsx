import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';

import {stylesCalendar} from './stylesCalendar';
import {IOT} from './types';
import {useCalendar} from './useCalendar';

interface Props {
  item: IOT;
}

enum objStateColor {
  pendiente = '#d62828',
  en_proceso = '#ffc300',
  finalizada = '#55a630',
}

export const OTCard = ({item}: Props) => {
  const {
    textPrimary,
    textSecondary,

    tertiary,
    card,
  } = useCalendar();
  console.log('itemTesting=====>', item);
  return (
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
            {`${moment(item.fecha_expedicion).format('YYYY/MM/DD')} - ${moment(
              item.fecha_cierre,
            ).format('YYYY/MM/DD')}  ${item.tiempoDeEjecucion} H`}
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
      </View>
    </View>
  );
};
