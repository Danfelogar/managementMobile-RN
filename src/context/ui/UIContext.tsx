import {createContext} from 'react';

interface ContextProps {
  //state
  isOpenFilterInventory: boolean;
  isOpenOTModal: boolean;
  isSnackbarSuccess: boolean;
  //functions
  changeModalFilterInventory: () => void;
  toggleModalOTs: () => void;
  toggleSnackBarSuccess: () => void;
}

export const UIContext = createContext({} as ContextProps);
