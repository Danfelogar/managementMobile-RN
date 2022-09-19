import {Animated, View} from 'react-native';
import React from 'react';
import {IDataOnboarding} from '../types';
import {styles, width} from '../styles';

interface Props {
  data: IDataOnboarding[];
  scrollX: any;
  backgroundColor: string;
}

export function Indicator({scrollX, data, backgroundColor}: Props) {
  return (
    <View style={styles.wrapperIndicator}>
      {data.map((item, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${idx}`}
            style={{
              ...styles.ballIndicator,
              backgroundColor: backgroundColor,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
}
