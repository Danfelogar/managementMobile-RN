import React, {useRef, useEffect, useContext} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ThemeContext} from '../../../context';
import {ISkeleton} from '../types';

export const Skeleton = ({width, height, style}: ISkeleton) => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);
  const translateX = useRef(new Animated.Value(-width)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      }),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <View
      style={StyleSheet.flatten([
        {
          width: width,
          height: height,
          backgroundColor: dividerColor,
          overflow: 'hidden',
        },
        style,
      ])}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{translateX: translateX}],
        }}>
        <LinearGradient
          style={{
            width: '100%',
            height: '100%',
          }}
          colors={['transparent', colors.border, 'transparent']}
          start={{x: 1, y: 1}}
        />
      </Animated.View>
    </View>
  );
};
