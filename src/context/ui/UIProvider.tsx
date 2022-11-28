import React, {FC, ReactNode, useReducer} from 'react';
import {UIContext} from './UIContext';
import {uiReducer} from './uiReducer';

export interface IUIState {
  isOpenFilterInventory: boolean;
}

export const UI_INITIAL_STATE: IUIState = {
  isOpenFilterInventory: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const changeModalFilterInventory = () => {
    dispatch({type: '[UI] Change Modal Filter Inventory State '});
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //functions
        changeModalFilterInventory,
      }}>
      {children}
    </UIContext.Provider>
  );
};
