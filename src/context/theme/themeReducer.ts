import {IColorsProps, IThemeState} from './ThemeProvider';

type ThemeActionType =
  | {type: '[Theme] Switching To Light Mode'; payload: IColorsProps}
  | {type: '[Theme] Switching To Dark Mode'; payload: IColorsProps};

export const themeReducer = (
  state: IThemeState,
  action: ThemeActionType,
): IThemeState => {
  switch (action.type) {
    case '[Theme] Switching To Dark Mode':
      return {
        theme: action.payload,
      };
    case '[Theme] Switching To Light Mode':
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};
