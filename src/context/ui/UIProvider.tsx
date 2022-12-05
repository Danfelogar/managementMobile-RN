import React, {FC, ReactNode, useReducer} from 'react';
import {UIContext} from './UIContext';
import {uiReducer} from './uiReducer';

export interface IUIState {
  isOpenFilterInventory: boolean;
  isOpenOTModal: boolean;
}

export const UI_INITIAL_STATE: IUIState = {
  isOpenFilterInventory: false,
  isOpenOTModal: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const changeModalFilterInventory = () => {
    dispatch({type: '[UI] Change Modal Filter Inventory State'});
  };

  const toggleModalOTs = () => {
    dispatch({type: '[UI] Change Modal OT State'});
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //functions
        changeModalFilterInventory,
        toggleModalOTs,
      }}>
      {children}
    </UIContext.Provider>
  );
};
