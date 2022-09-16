import {createContext} from 'react';
import {IColorsProps} from './ThemeProvider';

interface Props {
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

interface ContextProps {
  //state
  theme: Props;
  //functions
  changeADarkMode: (val: IColorsProps) => void;
  changeALightMode: (val: IColorsProps) => void;
}

export const ThemeContext = createContext({} as ContextProps);
