import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../context';

export const Onboarding = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {textPrimary, background} = colors;

  return (
    <View style={{backgroundColor: background, flex: 1}}>
      <Text style={{color: textPrimary}}>Onboarding 1</Text>
    </View>
  );
};
