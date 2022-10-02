import {useContext, useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';

import {AuthContext, ThemeContext} from '../../context';
import {ICredencial} from '../../helpers/types';
import {validateLogin} from '../../helpers';

export const useLogin = () => {
  const {isLoggedIn, handleLogin} = useContext(AuthContext);
  const navigation = useNavigation();

  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
    handleLogin(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home');
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
    //methods
    formMethods,
    //functions
    changePasswordSecret,
    validateCredentialsLogin,
  };
};
