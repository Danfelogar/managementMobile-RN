import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';

import {AuthContext, ThemeContext} from '../../context';

export const useCalendar = () => {
  const {user, isLoggedIn} = useContext(AuthContext);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
  } = colors;

  const navigation = useNavigation<any>();
  console.log({user});

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return {
    //state
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    //methods
    //functions
  };
};
