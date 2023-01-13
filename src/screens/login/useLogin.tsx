import {useContext, useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';

import {AuthContext, ThemeContext, UIContext} from '../../context';
import {ICredencial} from '../../helpers/types';
import {validateLogin} from '../../helpers';

export const useLogin = () => {
  const {isLoggedIn, handleLogin} = useContext(AuthContext);
  const {toggleSnackBarError, isSnackbarError} = useContext(UIContext);
  const navigation = useNavigation<any>();

  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState<string | undefined>(undefined);
  const formMethods = useForm<ICredencial>({
    resolver: yupResolver(validateLogin),
  });

  const changePasswordSecret = () => {
    setIsPasswordSecret(!isPasswordSecret);
  };

  const validateCredentialsLogin = (data: ICredencial) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    handleLogin(data)
      .then(res => {
        if (!res?.token) {
          toggleSnackBarError();
        }
      })
      .catch(err => {
        console.log(err.message);
        setTextError(err.message);
        toggleSnackBarError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLoggedIn === 'login') {
      navigation.navigate('TabNavigation');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

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
    isLoading,
    textError,
    isSnackbarError,
    //methods
    formMethods,
    //functions
    changePasswordSecret,
    validateCredentialsLogin,
    toggleSnackBarError,
  };
};
