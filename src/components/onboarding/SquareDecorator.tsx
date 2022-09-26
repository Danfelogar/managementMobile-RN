import React from 'react';
import {Animated} from 'react-native';
import {height, width} from '../../helpers';

export function SquareDecorator({
  scrollX,
  background,
}: {
  scrollX: any;
  background: string;
}) {
  const dashView = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );

  const rotate = dashView.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });

  const translateX = dashView.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height,
        height,
        backgroundColor: background,
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{rotate}, {translateX}],
      }}
    />
  );
}
