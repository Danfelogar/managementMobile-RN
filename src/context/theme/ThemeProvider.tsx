import React, {FC, ReactNode, useEffect, useReducer} from 'react';
import {Appearance, AppState} from 'react-native';
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface IColorsProps {
  currentTheme: string;
  dark: boolean;
  dividerColor: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
  };
}

export interface IThemeState {
  theme: IColorsProps;
}

export const lightTheme = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.12)',
  colors: {
    primary: '#ff8600',
    secondary: '#18314f',
    tertiary: '#7209b7',
    background: '#fff',
    card: 'rgba(0, 0, 0, 0.08)',
    textPrimary: 'rgba(0, 0, 0, 0.87)',
    textSecondary: 'rgba(0, 0, 0, 0.6)',
    border: 'rgba(0, 0, 0, 0.04)',
  },
};

export const darkTheme = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255, 255, 255, 0.12)',
  colors: {
    primary: '#ff8600',
    secondary: '#1565c0',
    tertiary: '#7209b7',
    background: '#202124',
    card: 'rgba(255, 255, 255, 0.16)',
    textPrimary: '#fff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.08)',
  },
};

export const THEME_INITIAL_STATE: IThemeState = {
  theme: lightTheme,
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE);

  const changeADarkMode = () => {
    dispatch({type: '[Theme] Switching To Light Mode', payload: darkTheme});
  };
  const changeALightMode = () => {
    dispatch({type: '[Theme] Switching To Dark Mode', payload: lightTheme});
  };

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? changeALightMode()
          : changeADarkMode();
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        //functions
        changeADarkMode,
        changeALightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
