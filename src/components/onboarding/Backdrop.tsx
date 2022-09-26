import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {width} from '../../helpers';
import {useOnboarding} from '../../screens';

export function Backdrop({scrollX}: any) {
  const {bgs} = useOnboarding();
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
}
