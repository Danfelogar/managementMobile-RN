import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';

import {AuthContext, ThemeContext} from '../../context';

export const useInventory = () => {
  const {isLoggedIn} = useContext(AuthContext);
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

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const changeNavigateSingleInventory = (id: string, type: string) => {
    navigation.navigate('NavigationInventoryByID', {
      singleInventoryID: id,
      type,
    });
  };

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
    changeNavigateSingleInventory,
  };
};
