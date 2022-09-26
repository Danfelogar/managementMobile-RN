import {useContext, useState} from 'react';
import {ThemeContext} from '../../context';

export const useLogin = () => {
  const [isPasswordSecret, setisPasswordSecret] = useState(true);

  const changePasswordSecret = () => {
    setisPasswordSecret(!isPasswordSecret);
  };

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

  return {
    //states
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    isPasswordSecret,
    //methods
    //functions
    changePasswordSecret,
  };
};
